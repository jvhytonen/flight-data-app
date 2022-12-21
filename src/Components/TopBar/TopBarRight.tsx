import 'animate.css';
import { useEffect, useRef, useState } from 'react'
import React from "react"

interface SchedulesType {
    publicTransport?: ScheduleItemType[] | null
}

export interface ScheduleItemType {
    scheduledDeparture: string
    headsign: string
}

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

const TopBarRight = (props: SchedulesType) => {
    const div = useRef<HTMLDivElement | null>(null)
    const [currentInd, setCurrentInd] = useState(0)

    useEffect(() => {
        let timer = window.setTimeout(async () => {
            const children = div.current?.children
            // If there is only one timetable to show, no scrolling is needed. Only make the only train visible.
            if (children?.length === 1) {
                children[0].classList.remove('hidden')
            }
            // If we have more than 1 timetable, they are scrolled with animation. 
            else if (children !== undefined && currentInd < children.length) {
                const current = children[currentInd]
                const prev = currentInd === 0 ? children[children.length - 1] : children[currentInd - 1]
                if (prev.classList.contains('block')) {
                    // The outgoing element is animated in a separate function.
                    await makeAnimation(prev, 'animate__fadeOutDown')
                    // When animation is finished, the animating class is removed so that we can add it again when its next turn comes.
                    prev.classList.remove('animate__fadeOutDown')
                    // And we make it invisible.
                    prev.classList.replace('block', 'hidden')
                }
                // Then the incoming animation is made visible and animated. 
                if (current.classList.contains('hidden')) {
                    current.classList.replace('hidden', 'block')
                    await makeAnimation(current, 'animate__fadeInDown')
                }
                // The next one will be animated by adding 1 to index. When the last train in the array is shown, we'll start again from 0.
                if (currentInd >= children.length - 1) {
                    setCurrentInd(0)
                } else {
                    setCurrentInd(currentInd + 1)
                }
            }
        }, 3000);
        return () => {
            window.clearTimeout(timer)
        }
    }, [currentInd, props.publicTransport])

    return (
        <div ref={div} className='flex w-1/2 flex-col'>
            {props.publicTransport?.map((item, ind) => {
                return <p key={ind} className='h-full animate__animated hidden ml-2'>{item.headsign} {item.scheduledDeparture}</p>
            })
            }
        </div>
    )
}
export default TopBarRight