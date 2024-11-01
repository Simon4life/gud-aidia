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
                <h1 className="font-[700] pb-5 text-[46px]">Leadership</h1>
                <p className="pb-5 md:pb-20 text-[20px]">Founder Kevin McCullagh&apos;s breadth of knowledge and ability to clarify ambiguity has made him a trusted advisor to innovation leaders. He helps them navigate the future and take their teams with them.</p>
                <Link href={''} className='mb-10 text-white font-[400] text-[20px] hover:text-[#faf1cf]'> Find out more</Link>
            </div>
            </div>
        </div>
        <div className="bg-[#4d724d] md:px-60 items-center flex h-screen text-left px-4 md:pt-0">
            <div className='md:w-[50%] text-[#faf1cf]'>
                <h1 className="font-[700] pb-5 text-[46px]">More on Leadership</h1>
                <p className="pb-5 md:pb-20 text-[20px]">Founder Kevin McCullagh&apos;s breadth of knowledge and ability to clarify ambiguity has made him a trusted advisor to innovation leaders. He helps them navigate the future and take their teams with them.</p>
                <Link href={''} className='mb-10 text-white font-[400] text-[20px] hover:text-[#faf1cf]'> Find out more</Link>
            </div>
        </div>
      </Carousel>
      
  )
}

export default Hero