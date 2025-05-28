'use client'

import Link from 'next/link'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Hero = () => {
  return (
      <section className="relative min-h-screen bg-[url('/hero-img.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-6 py-20">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Innovation. Growth. A Gʊd Aɪˈdiə.</h1>
          <p className="text-lg text-center md:text-xl mb-6 max-w-xl">Empowering businesses and athletes through strategy and literacy.</p>
          <div className="space-x-8">
            <button className="px-5 py-6 rounded text-black bg-purple-200 hover:bg-yellow-100">Get Started</button>
            <button className="border-b border-white text-white px-4 py-2 hover:text-yellow-600 transition">Join the Campaign</button>
          </div>
        </div>
        
      </section>
      
  )
}

export default Hero