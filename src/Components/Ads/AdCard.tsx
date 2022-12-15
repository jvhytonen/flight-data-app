
export interface AdCardType {
    url: string | undefined
}

const AdCard = (props: AdCardType) => {
    return (
        <div className='max-h-full w-auto overflow-hidden'>
            <img src={props.url} aria-label={props.url} alt=''/>
        </div>
    )
}
export default AdCard