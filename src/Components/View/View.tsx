import TopBar from "../TopBar/TopBar"
import { ScheduleItemType } from '../TopBar/TopBarRight';
import { WeatherComponentType } from '../News/Weather'
import { NewsType } from '../News/News'
import NewsContainer from '../News/NewsContainer';
import AdsInfo, { AdsInfoType } from '../Ads/AdsInfo'
import FlightData from '../FlightData/FlightData';
import { TimeTableType } from '../FlightData/TimeTable'
import Error from "../UI/Error";

export interface AppType {
    body: {
        flights?: TimeTableType[]
        news?: NewsType[]
        publicTransport?: ScheduleItemType[]
        weather: WeatherComponentType
        adsInfo?: AdsInfoType[]
    }
}
export interface ViewType {
    data: AppType
}

const View = (props: ViewType) => {

    return (
        <div className='w-full h-full'>
            <div className='h-[8%] w-full items-center justify-center shadow-md Topbar'>
                {props.data.body.publicTransport === undefined ? <TopBar /> : <TopBar publicTransport={props.data.body.publicTransport} />}
            </div>
            <div className='h-[92%] w-full flex shadow-md'>
                <div className='w-1/2 h-full relative justify-around Lefthalf text-white'>
                    <div className='h-full w-full m-auto Timetable'>
                        {props.data.body.flights ? <FlightData flights={props.data.body.flights} /> : <Error message={"No data"} />}
                    </div>
                </div>
                <div className='w-1/2 h-full flex flex-col justify-around items-center Righthalf'>
                    <div className='h-[50%] w-[90%] shadow-lg flex my-5'>
                        <NewsContainer news={props.data.body.news} weather={props.data.body.weather} />
                    </div>
                    {props.data.body.adsInfo ? <AdsInfo info={props.data.body.adsInfo} /> : <Error message={"No data"} />}
                </div>
            </div>
        </div>
    )
}
export default View
