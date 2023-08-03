'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the Carousel CSS
import Image from 'next/image'
import Card from './card';
const Slider = () => {
    return (
        <>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
                legned={false}
            >
                <div>
                    <Image width={300} height={200} src="/images/s1.jpg" alt="slider1" />

                </div>
                <div>
                    <Image width={300} height={200} src="/images/s2.jpg" alt="slider2" />

                </div>
                <div>

                    <Image width={300} height={200} src="/images/s3.jpg" alt="slider3" />

                </div>
            </Carousel>

            <Card />
        </>
    )
}

export default Slider