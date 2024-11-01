import React from 'react'

export interface Gridimg {
    color: string
  }

const Color = ({color}: Gridimg) => {
  return (
    <div className="group relative md:flex flex-col justify-center overflow-hidden text-center h-[415px] hidden">
        <div className={`${color} absolute inset-0 image`}></div>
        <div className="absolute inset-0 bg-[#8db48e75] hidden group-hover:block h-auto w-auto"></div>
    </div>
  )
}

export default Color