import Airline from "./Airline"
import FlightNumber from "./FlightNumber"
import Time from "./Time"
import Destination from "./Destination"


export interface DepDataItemsType {
    codeShareNr?: string
    airline: string
    flightNr: string[][]
    destination: string
    scheduled: string
    actual?: string
    estimated?: string | null
    terminal?: string
    gate?: string
}

export interface ArrDataItemsType {
    codeShareNr?: string
    airline: string
    flightNr: string[][]
    destination: string
    scheduled: string
    actual?: string
    estimated?: string | null
    terminal?: string
    baggage?: string
}

export interface TimeTableType {
    data: DepDataItemsType[] | ArrDataItemsType[]
    type: string
}

const TimeTable = (props: TimeTableType) => {
    // We divide the whole height by amount of flights shown on one page.
    let itemHeight = (1 / props.data.length) * 100
    let heightClass = itemHeight + '%'
    let divHeightStyle: React.CSSProperties | undefined
    // The height of the single item must be defined as max height when there are no full 15 flights to be shown. Otherwise they will strech.
    if (props.data.length < 15) {
        divHeightStyle = {
            maxHeight: `${heightClass}`
        }
    }
    else {
        divHeightStyle = {
            height: `${heightClass}`
        }
    } 
    let rows = props.data.map((item: DepDataItemsType | ArrDataItemsType, index: number) => {
        return (
            <div key={index} style={divHeightStyle} className={'FlightDataTable w-full flex h-[6%] text-3xl'}>
                <div className='w-[36%] h-full flex items-center justify-center'>
                    <Time scheduled={item.scheduled} estimated={item.estimated} actual={item.actual} type={props.type} />
                </div>
                <div className='w-[23%] flex items-center justify-start'>
                    <Airline airline={item.airline} />
                </div>
                <div className='w-[12%] flex items-center justify-start text-3xl'>
                    <FlightNumber flightNumber={item.flightNr[0]} />
                </div>
                <div className='w-[29%] flex items-center justify-start ml-4'>
                    <Destination destination={item.destination} />
                </div>
            </div>
        )
    })

    return (
        <div className='w-full h-full'>
            <div className='h-[5%] w-full text-5xl tracking-wide flex items-center justify-center font-bold uppercase'>
                <p>{props.type}</p>
            </div>
            <div className='h-[95%] w-full'>
                {rows}
            </div>
        </div>
    )
}

export default TimeTable