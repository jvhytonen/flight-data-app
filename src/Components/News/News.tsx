import React from "react"

export interface NewsType {
    title: string
    description: string
    urlToImage: string
}


const News = (props: NewsType) => {
    return (
        <div className='w-full h-full flex flex-col'>
            <div className='w-full'>
                {/**Aria label is here for the test runs. This is a way to test that img with url is shown as should. */}
                <img className='max-h-[320px] w-auto' aria-label={props.urlToImage} src={props.urlToImage} alt='' />
            </div>
            <div className='w-full pt-3 px-3'>
             {/*    Sometimes the News-API gives very long titles and descriptions. This check makes sure the text won't overflow by showing only 
                the title. */}
            {props.description.length < 160 ? 
            <>
                <p className='text-2xl uppercase '>{props.title}</p>
                <p className='text-xl'>{props.description}</p> </> : <p className='text-3xl'>{props.title}</p>}
            </div>
        </div>
    )
}
export default News
