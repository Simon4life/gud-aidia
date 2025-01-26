import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#800080]'>
        <div className="pt-20 pb-5 md:px-40 text-white">
            <div className="md:flex justify-between items-start border-b-[#FFFFFF52] border-b-2 pb-10 px-20">
                <div className="pb-10 md:pb-0">
                <Image src={'/logo.png'} alt='logo' width={337} height={307}/>

                </div>
                <div className="">
                    <ul className="text-[30px] md:text-[20px]">
                        <li className="mb-5"><Link href={'/about'} className=' hover:text-[#faf1cf]'>About</Link></li>
                        <li className="mb-5"><Link href={'/about#mvp'} className=' hover:text-[#faf1cf]'>Our MVP</Link></li>
                        <li className="mb-5"><Link href={'/work'} className=' hover:text-[#faf1cf]'>Workshop</Link></li>
                        <li className="mb-5"><Link href={''} className=' hover:text-[#faf1cf]'>Book Club</Link></li>
                    </ul>
                </div>
                <div className="">
                    <ul className="text-[30px] md:text-[20px]">
                        <li className="mb-5"><Link href={''} className=' hover:text-[#faf1cf]'>Register</Link></li>
                        <li className="mb-5"><Link href={''} className=' hover:text-[#faf1cf]'>Donate</Link></li>
                        <li className="mb-5"><Link href={'/contact'} className=' hover:text-[#faf1cf]'>Contact</Link></li>
                        <li className="mb-5"><Link href={''} className=' hover:text-[#faf1cf]'>The Gʊd Aɪ’diə Campaign</Link></li>
                    </ul>
                </div>
            </div>
            <div className="pt-10 px-20">
                <p className="text-">&copy; 2024 Net-Trix Solutions</p>
            </div>
        </div>
    </div>
  )
}

export default Footer