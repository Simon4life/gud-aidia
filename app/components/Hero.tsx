'use client'
import { MdArrowOutward } from "react-icons/md";
import Link from 'next/link'
import React from 'react';

interface heroInterface {
  header: String
  subheader: String
  links?: Boolean
}

const Hero = ({header, subheader, links}: heroInterface) => {
  return (
      <section className="relative min-h-screen bg-[url('/hero-img.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-6 py-20">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{header}</h1>
          <p className="text-lg text-center md:text-xl mb-8">{subheader}</p>

          {
            links && (<div className="flex flex-col md:flex-row gap-8 justify-center items-center font-semibold">
              <Link href="/services" className="px-5 py-6  rounded flex items-center justify-center text-black bg-purple-300 hover:bg-yellow-100">Get Started <span className="ml-4"><MdArrowOutward/></span></Link>
              <Link href="/campaign" className="border-b inline-block border-white text-white py-2 hover:text-yellow-600 transition">Join the Campaign</Link>
            </div>)
          }
          
        </div>
        
      </section>
      
  )
}

export default Hero