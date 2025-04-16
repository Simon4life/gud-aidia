'use client'

import Link from 'next/link'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Hero = () => {
  return (
      <Carousel showArrows={true} showThumbs={false} showIndicators={true} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true} stopOnHover={true} swipeable={true} transitionTime={2000} interval={5000} animationHandler={'fade'} showStatus={false}>
        <div className="bg-[url('/fp5.jpg')] bg-cover   text-left">
            <div className="bg-[#00000050] w-full md:px-60 items-center flex px-4 md:pt-0 h-screen">
            <div className='md:w-[50%] text-[#faf1cf]'>
                <h1 className="font-[600] pb-5 text-[35px]">We help businesses defy limits, navigate transformation, and achieve lasting success,no matter how complex.
                </h1>
                <p className="pb-5 md:pb-20 text-[18px]">At The Gʊd Aɪ’diə Company, we help businesses break through challenges and achieve sustainable success. Whether you’re scaling up, refining your strategy, or navigating change, our team delivers **bold strategies, fresh insights, and innovative solutions that drive real impact.</p>
                <Link href={''} className='mb-10 text-white font-[400] text-[20px] hover:text-[#faf1cf]'> Find out more</Link>
            </div>
            </div>
        </div>
        <div className="bg-[url('/fp.jpg')] bg-cover md:px-60 items-center flex h-screen text-left px-4 md:pt-0">
            <div className='md:w-[50%] text-[#faf1cf]'>
                <h1 className="font-[700] pb-5 text-[35px]">Let&apos;s make your business thrive today.  Talk to Us Today</h1>
                <p className="pb-5 md:pb-20 text-[18px]">We work across Consumer, Entertainment & Recreation, Technology, and Energy sector, using our **CSM/EDF Algorithm to create agile, results-driven strategies tailored to your business needs. </p>
                <Link href={''} className='mb-10 text-white font-[400] text-[20px] hover:text-[#faf1cf]'> Find out more</Link>
            </div>
        </div>
      </Carousel>
      
  )
}

export default Hero