"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { MdArrowOutward } from 'react-icons/md'

const items = [
  {
    id: '001',
    title: 'Brand Renaissance',
    description: 'Revitalizing and evolving brand identities to ensure relevance and impactful engagement with target audiences.',
    image: '/Gud1.jpg',
    tags: ['Branding', 'Identity', 'Marketing', 'Strategy'],
  },
  {
    id: '002',
    title: 'Business Strategy Alignment',
    description: 'Providing expert advice and insights to align business operations with market trends and future goals, driving strategic growth.',
    image: '/business-alignment.jpg',
    tags: ['Strategy', 'Business Development', 'Growth', 'Consulting'],
  },
  {
    id: '003',
    title: 'Digital Positioning and Transformation',
    description: 'Optimizing and leveraging digital strategies to achieve a specific market position or advantage (market differentiation). Adoption and integration of cutting-edge digital technologies and strategies to improve operations and customer interactions.',
    image: '/positioninig',
    tags: ['Digital Strategy', 'Digital Transformation', 'Technology', 'Marketing', 'Operations'],
  },
  {
    id: '004',
    title: 'Innovative Solutions Management',
    description: 'Guiding businesses through the complete innovation lifecycle, from conceptualization to implementation, to maintain a competitive edge.',
    image: '/direction.jpg',
    tags: ['Innovation', 'Project Management', 'Solutions', 'Strategy'],
  },
];

export default function ServiceDropdown() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white max-w-6xl mx-auto py-16 px-4">
      <div className="w-full mx-auto divide-y divide-gray-200">
        <div className="flex flex-col md:flex-row p-0 gap-6 mb-12 md:justify-between items-center">
          <h1 className='text-5xl md:text-5xl max-w-[600px]'>Marketing Strategy solutions for you</h1>
          <div className="max-w-[400px]">
            <p className='m-0 p-0 text-xl mb-6'>
              Several key factors, including market trends, the agency's ability to  adapt
            </p>
            <Link href="/" className='px-2 py-4 text-xl flex items-center w-60 justify-center bg-purple-300 rounded text-center'>View all services <span className='ml-4'><MdArrowOutward/></span></Link>
          </div>
        </div>
            {items.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div key={index} className="py-4">
                  
                  <div className="flex items-center justify-between cursor-pointer" onClick={() => toggle(index)}>
                          <span className={`text-sm px-3 py-1 rounded-full ${index === 0 ? 'bg-blue-100' : index === 1 ? 'bg-yellow-100' : 'bg-green-100'}`}>
                            {item.id}
                          </span>
                          <h3 className="flex-1 ml-6 md:ml-48 text-xl font-medium text-gray-800">{item.title}</h3>
                          <span className="text-2xl">{isOpen ? '−' : '+'}</span>
                  </div>
                  {isOpen && (
                    <div className="mt-4 flex flex-col md:ml-16 md:flex-row md:items-start gap-8 px-2">
                      {/* Image */}
                      {item.image && (
                        <Image
                        src={item.image}
                        alt={item.title}
                        width={128}
                        height={128}
                        className="object-cover rounded"
                      />
                      )}

                      {/* Text & Link */}
                      <div className="flex-1">
                        <p className=" text-gray-600 mb-3 max-w-[474px]">{item.description}</p>
                        <a href="#" className="text-sm font-medium text-gray-700 underline inline-flex items-center gap-1">
                          Learn more <span>↗</span>
                        </a>

                        {/* Tags */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.tags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1 rounded-full border-[2px] text-sm text-gray-700">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
      </div>
    </section>
    
  )
}
