'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CgClose, CgMenuCheese } from 'react-icons/cg'

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <div>
      <div className='w-full bg-[#3f6844] fixed z-40'>
        <div className="flex justify-center items-center text-white py-3">
            <div className="flex justify-between items-center w-[80%] m-auto">
                <Link href={'/'}><Image src={'/logo.png'} alt='logo' width={87} height={57}/></Link>
                <ul className="md:flex font-[400] text-[19px] gap-10 items-center hidden">
                    <Link href={'/'}><li className="hover:text-[#a5a5a5]">Home</li></Link>
                    <Link href={'/work'}><li className="hover:text-[#a5a5a5]">Work</li></Link>
                    <Link href={'/about'}><li className="hover:text-[#a5a5a5]">About Us</li></Link>
                    <Link href={'/contact'}><li className="hover:text-[#a5a5a5]">Contact Us</li></Link>
                    <Link href={''}> <li className='bg-[#faf1cf] py-2 px-4 text-gray-900 rounded-md hover:bg-[#a5a5a5]'>Gʊd Aɪ’diə Campaign</li> </Link>
                </ul>
                <CgMenuCheese className='text-[30px] md:hidden' onClick={handleClick}/>
            </div>
            
        </div>
        
      </div>
      <div className={isActive ? ' fixed w-full z-50' : 'hidden'}>
            <div className="flex justify-center items-center text-white py-3 bg-[#3f6844]">
              <div className="flex justify-between items-center w-[80%]">
                <Link href={'/'}><Image src={'/logo.png'} alt='logo' width={87} height={57}/></Link>
                <CgClose className='text-[30px] md:hidden text-right' onClick={handleClick}/>
              </div>
            </div>
            <div className="flex justify-center items-center h-screen ">
              
              <div className="w-[20%] h-full" onClick={handleClick}></div>
              <div className="w-[80%] py-5 px-10 bg-[#3f6844] text-white h-full">
                <ul className="text-[25px] pt-20">
                        <Link href={'/'}><li className="hover:text-[#a5a5a5] py-5">Home</li></Link>
                        <Link href={'/work'}><li className="hover:text-[#a5a5a5] py-5">Work</li></Link>
                        <Link href={'/about'}><li className="hover:text-[#a5a5a5] py-5">About Us</li></Link>
                        <Link href={'/contact'}><li className="hover:text-[#a5a5a5] py-5">Contact Us</li></Link>
                        <Link href={''}> <li className='bg-[#faf1cf] py-2 px-4 text-gray-900 rounded-md hover:bg-[#a5a5a5] mt-20'>Gʊd Aɪ’diə Campaign</li> </Link>
                    </ul>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Navbar