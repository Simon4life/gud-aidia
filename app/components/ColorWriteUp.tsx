import React from 'react'

export interface Gridimg {
    heading: string, color: string, text: string
  }

const ColorWriteUp = ({heading, text, color}: Gridimg) => {
  return (
      <div className="group relative flex flex-col justify-center overflow-hidden text-center h-[415px]"> 
        <div className={`${color} absolute inset-0 image`}></div>
        <h1 className='font-lg z-10 font-[700] text-[32px] text-white pb-2'>{heading}</h1>
        <p className={text === '' ? 'hidden' : 'text-[25px] text-white z-10 px-5'}>{text}</p>
        <div className="absolute inset-0 bg-[#8db48e75] hidden group-hover:block h-auto w-auto"></div>
        
      </div>
  )
}

export default ColorWriteUp