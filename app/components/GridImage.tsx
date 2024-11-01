import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface Gridimg {
    heading: string, pic: string, text: string, link: string
  }

const GridImage = ({heading, pic, text, link}: Gridimg) => {
  return (
    <Link href={link}>
      <div className="group relative flex flex-col justify-center overflow-hidden text-center h-[415px] cursor-pointer">
        <Image src={pic} alt="University of Southern California" className="absolute inset-0 object-cover image" width={500} height={500}/>  
        <div className="absolute inset-0 bg-[#8db48e75] hidden group-hover:block h-auto w-auto"></div>
        <h1 className='font-lg hidden group-hover:block z-10 font-[700] text-[32px] text-white pb-2'>{heading}</h1>
        <p className={text === '' ? 'hidden' : 'text-[25px] text-white z-10 hidden group-hover:block px-5'}>{text}</p>
      </div>
    </Link>
  )
}

export default GridImage