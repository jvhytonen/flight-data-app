interface TimeType {
    scheduled: string
    estimated?: string | null | undefined
    actual?: string | null | undefined
    type: string
}
const Time = (props: TimeType) => {
    let isDeparted = props.actual === null ? false : true
    let isEstimated = props.estimated === null ? false : true
    let timeColor:string
    let detailText: string
    let textColor = 'text-white'
    if (isDeparted) {
        timeColor = 'bg-green-600'
        detailText = props.type === 'departures' ? 'Departed ' : 'Landed '
    }
    else if (isEstimated) {
        timeColor = 'bg-amber-300'
        detailText = 'Estimated '
        textColor = 'text-zinc-500'
    }
    else {
        timeColor = ''
        detailText = ''
    }
    return (
        <div className='h-full w-full flex items-center justify-around px-2'>
           <div className='w-full h-full flex items-center justify-around'>
                        <p className='w-[32%]'>{props.scheduled}</p>
                        <p className={`w-[68%] h-[80%] px-1 flex items-center ${textColor} ${timeColor}`}>{detailText}{props.estimated}</p>
                    </div>
        </div>
    )
}
export default Time 
