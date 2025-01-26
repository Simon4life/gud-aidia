'use client'

import Link from 'next/link'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Hero = () => {
  return (
      <Carousel showArrows={true} showThumbs={false} showIndicators={true} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true} stopOnHover={true} swipeable={true} transitionTime={2000} interval={5000} animationHandler={'fade'} showStatus={false}>
        <div className="bg-[url('/pickawood.jpg')] bg-cover   text-left">
            <div className="bg-[#00000050] w-full md:px-60 items-center flex px-4 md:pt-0 h-screen">
            <div className='md:w-[50%] text-[#faf1cf]'>
                <h1 className="font-[700] pb-5 text-[46px]">Transforming Businesses with Innovation and Strategy</h1>
                <p className="pb-5 md:pb-20 text-[20px]">At The Gʊɝ Aɪ’diə Company, we empower businesses to unlock their true potential through forward-thinking strategies and innovative solutions. Our expertise spans multiple industries, enabling us to deliver bespoke growth solutions that drive measurable success</p>
                <Link href={''} className='mb-10 text-white font-[400] text-[20px] hover:text-[#faf1cf]'> Find out more</Link>
            </div>
            </div>
        </div>
        <div className="bg-[url('/fp.jpg')] bg-cover md:px-60 items-center flex h-screen text-left px-4 md:pt-0">
            <div className='md:w-[50%] text-[#faf1cf]'>
                <h1 className="font-[700] pb-5 text-[46px]">Your Trusted Partner for Sustainable Growth</h1>
                <p className="pb-5 md:pb-20 text-[20px]">With a focus on resilience, innovation, and service excellence, we partner with businesses to navigate challenges and seize opportunities. Our client-centric approach ensures every strategy is tailored to align with your long-term objectives and market needs.</p>
                <Link href={''} className='mb-10 text-white font-[400] text-[20px] hover:text-[#faf1cf]'> Find out more</Link>
            </div>
        </div>
      </Carousel>
      
  )
}

export default Hero