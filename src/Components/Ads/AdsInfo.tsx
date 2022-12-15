import AdCard from "./AdCard"
import InfoCard from "./InfoCard"
import { useEffect, useRef, useState } from "react"

export interface InformationType {
    info: AdsInfoType[]
}

export interface AdsInfoType {
    type: string
    infoData?: string
    url?: string
}

const AdsInfo = (props: InformationType) => {
    const adsInfoDiv = useRef<HTMLDivElement | null>(null)
    const [currentInd, setCurrentInd] = useState(0)

    const makeAnimation = (el: Element, animation: string) => {
        // This animation will make sure the whole animation is finished before showing the next animation. 
        return new Promise<void>(resolve => {
            const onEnd = () => {
                el.removeEventListener('animationend', onEnd)
                resolve()
            }
            el.addEventListener('animationend', onEnd)
            el.classList.add(animation)
        })
    }

    useEffect(() => {
        //This will change the ad or info to the next/first. 
        if (props.info) {
            const timer = setTimeout(() => {
                if (props.info.length === 1) {
                    return
                }
                else if ((currentInd + 1) < props.info.length) {
                    setCurrentInd(currentInd + 1)
                }
                else if ((currentInd + 1) === props.info.length) {
                    setCurrentInd(0)
                }
            }, 15000)
            return () => clearTimeout(timer)
        }
    }, [currentInd, props.info])

    // A card with text OR an advertisement with an image will be displayed depending on what the user wants to show.   
    const renderType = (type: string) => {

        switch (type) {
            case 'info':
                return (
                    <div className='h-[40%] w-[90%] flex justify-center items-center Info p-5 overflow-hidden shadow-lg'>
                        {/* Info-class defined in App.css */}
                        
                            <InfoCard
                                infoData={props.info[currentInd].infoData}
                            />
            
                    </div>
                )
            case 'ad':
                return (
                    <div className='max-h-[50%] w-auto'>
                        <AdCard url={props.info[currentInd].url} />
                    </div>
                )
        }
    }

    return (
        <>
            {props.info ? renderType(props.info[currentInd].type) : null}
        </>
    )
}
export default AdsInfo