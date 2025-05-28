import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
        <div className="section-header">
        
            <span></span>
            <p>Our Values</p>
            <h2 className="sm:text-2xl text-left md:text-3xl lg:text-4xl mb-8 leading-relaxed">
            We are a team of strategic innovators who believe that every idea has a story.
            At The Gʊd Aɪˈdiə Company, our mission is to bring that story to life through bold strategy, creative thinking, and purpose-driven growth.
            </h2>
        </div>
            


        <div className="flex gap-6 flex-col md:flex-row items-center">
            <div>
                    
                <div className="mb-5">
                    <h3 className='text-xl font-bold mb-3'>Based in New Jersey</h3>
                    <p className='max-w-[700px] text-gray-500'>Based in London, our digital agency is dedicated to helping brands thrive in the digital world. We specialize in web design, digital marketing, SEO, content creation.</p>
                </div>
                <div className="mb-5">
                    <h3 className='text-xl font-bold mb-3'>Our goal is clear</h3>
                    <p className='max-w-[700px] text-gray-500'>At The Gʊd Aɪˈdiə Company, we simplify complexity and spark bold growth through strategic, innovative solutions.</p>
                </div>

                <Link href="/about" className="border-b font-semibold">Learn More</Link>

                {/* stats */}

                <div className="flex mt-8 ">
                    <div className='pr-6'>
                        <h1 className='text-5xl font-bold mb-4'>08+</h1>
                        <p>Global Team members</p>
                    </div>
                    <div className='border-l px-8'>
                        <h1 className='text-5xl font-bold mb-4'>10k</h1>
                        <p>Global Team members</p>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-4xl mx-auto px-4">
                    <div className="relative aspect-video overflow-hidden rounded-2xl">
                        <img
                        src="/worker.jpg"
                        alt="Descriptive Alt Text"
                        className="h-full w-full"
                        />
                    </div>
            </div>

        </div>
    

    </section>
  )
}

export default About;
