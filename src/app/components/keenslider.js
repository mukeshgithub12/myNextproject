'use client'
import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
const Keenslider = () => {
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            slideChanged() {
                console.log('slide changed')
            },
        },
        [
            // add plugins here
        ]
    )

    return (
        <>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide">
                    <Image width={1600} height={600} src="/images/s1.jpg" alt="slider1" />

                </div>
                <div className="keen-slider__slide">
                    <Image width={1600} height={600} src="/images/s2.jpg" alt="slider2" />

                </div>
                <div className="keen-slider__slide">
                    <Image width={1600} height={600} src="/images/s3.jpg" alt="slider3" />

                </div>
            </div>

        </>
    )
}

export default Keenslider