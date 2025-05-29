"use client"
import Link from 'next/link'
import { useState } from 'react'
import { MdArrowOutward } from 'react-icons/md'

const items = [
  {
    id: '001',
    title: 'SEO Marketing',
    description: 'Leverages platforms like Facebook, Instagram, LinkedIn to engage and attract.',
    image: '/Gud1.jpg',
    tags: ['Services', 'E-Commerce', 'Corporate Website', 'HR Platform'],
  },
  {
    id: '002',
    title: 'Social Media',
    description: 'Leverages platforms like Facebook, Instagram, LinkedIn to engage and attract.',
    image: 'Gud2.jpg',
    tags: ['Services', 'E-Commerce', 'Corporate Website', 'HR Platform'],
  },
  {
    id: '003',
    title: 'Content Marketing',
    description: 'Leverages platforms like Facebook, Instagram, LinkedIn to engage and attract.',
    image: 'Gud3.jpg',
    tags: ['Services', 'E-Commerce', 'Corporate Website', 'HR Platform'],
  }
]

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
                          <h3 className="flex-1 ml-6 md:ml-32 text-xl font-medium text-gray-800">{item.title}</h3>
                          <span className="text-2xl">{isOpen ? '−' : '+'}</span>
                  </div>
                  {isOpen && (
                    <div className="mt-4 flex flex-col md:ml-4 md:flex-row md:items-start gap-6 px-2">
                      {/* Image */}
                      {item.image && (
                        <img src={item.image} alt={item.title} className="w-32 h-32 object-cover rounded" />
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
