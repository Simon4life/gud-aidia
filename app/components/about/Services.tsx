'use client'

import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Services = () => {
  return (
        <div>
            <div className="py-5 text-center">
            <h1 className='text-gray-600'>Services</h1>
        </div>
        <Carousel showArrows={true} showThumbs={false} showIndicators={true} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true} stopOnHover={true} swipeable={true} transitionTime={2000} interval={5000} animationHandler={'fade'} showStatus={false}>
        <div className="bg-[#4d724d] text-[#faf1cf] md:px-40 lg:px-60 items-center flex h-[70vh] text-left px-4 md:pt-0">
        <div className="hidden md:block w-1/2"><Image src={''} alt=''/></div>
            <div className='md:w-[50%]'>
                <h1 className="font-[700] pb-5 text-[46px]">Brand Renaissance</h1>
                <p className="pb-5 md:pb-20 text-[20px]">Revitalizing and evolving brand identities to ensure relevance and impactful engagement with target audiences. SB</p>
            </div>
        </div>
        <div className="bg-[#4d724d] text-[#faf1cf] md:px-40 lg:px-60 items-center flex h-[70vh] text-left px-4 md:pt-0">
        <div className="hidden md:block w-1/2"><Image src={''} alt=''/></div>
            <div className='md:w-[50%]'>
                <h1 className="font-[700] pb-5 text-[46px]">Business Strategy Alignment</h1>
                <p className="pb-5 md:pb-20 text-[20px]">Providing expert advice and insights to align business operations with market trends and future goals, driving strategic growth. SU & NV</p>
            </div>
        </div>
        <div className="bg-[#4d724d] text-[#faf1cf] md:px-40 lg:px-60 items-center flex h-[70vh] text-left px-4 md:pt-0">
        <div className="hidden md:block w-1/2"><Image src={''} alt=''/></div>
            <div className='md:w-[50%]'>
                <h1 className="font-[700] pb-5 text-[46px]">Digital Positioning and Transformation</h1>
                <p className="pb-5 md:pb-20 text-[20px]">Optimizing and leveraging digital strategies to achieve a specific market position or advantage (market differentiation).  SME/EB <br /><br />Adoption and integration of cutting-edge digital technologies and strategies to improve operations and customer interactions.</p>
            </div>
        </div>
        <div className="bg-[#4d724d] text-[#faf1cf] md:px-40 lg:px-60 items-center flex h-[70vh] text-left px-4 md:pt-0">
        <div className="hidden md:block w-1/2"><Image src={''} alt=''/></div>
            <div className='md:w-[50%]'>
                <h1 className="font-[700] pb-5 text-[46px]">Excellence Optimization</h1>
                <p className="pb-5 md:pb-20 text-[20px]">Streamlining and enhancing business processes to achieve peak efficiency, cost reduction, and superior performance. SME/EB</p>
            </div>
        </div>
        <div className="bg-[#4d724d] text-[#faf1cf] md:px-40 lg:px-60 items-center flex h-[70vh] text-left px-4 md:pt-0">
        <div className="hidden md:block w-1/2"><Image src={''} alt=''/></div>
            <div className='md:w-[50%]'>
                <h1 className="font-[700] pb-5 text-[46px]">Innovative Solutions Management</h1>
                <p className="pb-5 md:pb-20 text-[20px]">Guiding businesses through the complete innovation lifecycle, from conceptualization to implementation, to maintain a competitive edge. MB</p>
            </div>
        </div>
        <div className="bg-[#4d724d] text-[#faf1cf] md:px-40 lg:px-60 items-center flex h-[70vh] text-left px-4 md:pt-0">
        <div className="hidden md:block w-1/2"><Image src={''} alt=''/></div>
            <div className='md:w-[50%]'>
                <h1 className="font-[700] pb-5 text-[46px]">Holistic Growth Design</h1>
                <p className="pb-5 md:pb-20 text-[20px]">Delivering comprehensive strategies for sustainable business growth that aligns with long-term objectives and vision. SB</p>
            </div>
        </div>
        </Carousel>
        </div>
      
  )
}

export default Services