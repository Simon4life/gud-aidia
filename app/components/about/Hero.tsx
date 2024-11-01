import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#5c6e58] flex pt-40 p-20 justify-center items-center gap-5'>
        <div className="w-1/2 flex justify-center "><Image src={'/wireframe.png'} alt='' width={500} height={500} className='aboutimage'/></div>
        <div className="w-1/2 text-white">
            <h1 className="font-[700] pb-5 text-[46px]">We are <span className="text-[#faf1cf]">The Gʊd Aɪ’diə Company</span></h1>
            <p className="text-[20px]">The Gʊd Aɪˈdiə Company is an innovation and growth strategy enabler based in New Jersey. We help leading establishments navigate all stages of innovation and growth. Founded with a strategic mission, we are a team of innovation specialists, strategists, analysts, technology experts, behavioral scientists and coordinators who have earned a reputation for cutting through complexity over many years while offering clear, independent and candid strategic solutions.
                <br /><br />Our expertise spans various sectors that include <b>Consumer</b>, <b>Entertainment & Recreation</b>, <b>Technology</b> and <b>Energy</b>.
            </p>
        </div>
    </div>
  )
}

export default Hero