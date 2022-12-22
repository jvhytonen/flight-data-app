import React from "react"
import TopBarRight, { ScheduleItemType } from './TopBarRight'
import TopBarLeft from './TopBarLeft'

interface TopBarType {
    publicTransport?: ScheduleItemType[] | null
}

const TopBar = (props: TopBarType) => {

    return (
        <div className='w-full h-full flex items-center justify-around text-white font-bold text-3xl'>
            <div className='w-1/2 h-full flex items-center justify-around'>
                <TopBarLeft />
            </div>
            {props.publicTransport ?
                <div className='w-1/2 h-full flex items-center justify-around'>
                   <p>Next trains to city center:</p>
                    <TopBarRight publicTransport={props.publicTransport}/> 
                </div> : null}
        </div>
    )
}
export default TopBar