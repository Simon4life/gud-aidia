import Image from 'next/image'
import React from 'react'
import Form from '../components/contact/Form'
import Link from 'next/link'

const page = () => {
  return (
    <div>
         <div className="pt-16"></div>
         <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="group relative flex flex-col justify-center overflow-hidden text-center h-[520px]">
                <Image src='/contact1.jpg' alt="University of Southern California" className="absolute inset-0 object-cover contactimage" width={700} height={700}/>
                <div className="absolute inset-0 bg-[#00000070] h-auto w-full"></div>
                <h1 className='font-lg z-10 font-[700] text-[32px] text-white'>Contact Us</h1>
            </div>
            <div className="contactimage"><Form/></div>
            <div className="contactimage bg-[#1ba098] flex flex-col justify-center overflow-hidden text-center h-[520px]">
                <h1 className='font-lg z-10 font-[700] text-[32px] text-white pb-5'>The Gʊd Aɪ’diə Company</h1>
                <p className="text-[25px] text-white z-10 px-5">
                    USA <br />
                    +1862-224-6855 <br />
                    <Link href={''} className='underline'>kickoff@gudaidia.com</Link>
                </p>
            </div>
            <div className="group relative flex flex-col justify-center overflow-hidden text-center h-[520px]">
                <Image src='/contact2.jpg' alt="University of Southern California" className="absolute inset-0 object-cover contactimage" width={700} height={700}/>
            </div>
         </div>
    </div>
  )
}

export default page