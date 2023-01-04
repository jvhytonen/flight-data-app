

interface TimeType {
    scheduled: string
    estimated?: string | null | undefined
    actual?: string | null | undefined
    type: string
    status: string
}
const Time = (props: TimeType) => {
    // All departed/landed flights are shown on green background color.
    // Most flights have actual departure/arrival time. Not all. 
    // For flights that have departed without actual time, we simply mark Departed or Landed
    let hasDepartedWithoutTime = props.type === 'departures' && props.status === 'active' ? true : false
    let hasArrivedWitoutTime = props.type === 'arrivals' && props.status === 'landed' ? true : false
    let hasDepartedArrivedWithTime = props.actual === null ? false : true
    // If the flight is estimated, it will be shown on yellowish background.
    let isEstimated = props.estimated === null ? false : true
    let isCancelled = props.status === 'cancelled' ? true : false
    // The variables behaving according to the rules mentioned above.
    let timeColor:string
    let detailText: string
    let textColor = 'text-white'
    if (isCancelled) {
        timeColor = 'bg-red-700'
        detailText = 'Cancelled '
    }
    else if (hasDepartedArrivedWithTime || hasDepartedWithoutTime || hasArrivedWitoutTime ) {
        timeColor = 'bg-green-600'
        detailText = props.type === 'departures' ? 'Departed ' : 'Landed '
    }
    else if (isEstimated) {
        timeColor = 'bg-amber-300'
        detailText = 'Estimated '
        textColor = 'text-zinc-500'
    }
    // Most flights still to depart/arrive after many hours are shown without any special backgrounds. 
    else {
        timeColor = ''
        detailText = ''
    }
    return (
        <div className='h-full w-full flex items-center justify-around px-2'>
           <div className='w-full h-full flex items-center justify-around'>
                        <p className={`w-[32%] ${isCancelled ? 'line-through' : 'no-underline'}`}>{props.scheduled}</p>
                        <p className={`w-[68%] h-[80%] px-1 flex items-center ${textColor} ${timeColor}`}>{detailText}{isCancelled ? null : props.estimated}</p>
                    </div>
        </div>
    )
}
export default Time 
