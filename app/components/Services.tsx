"use client"
import Link from 'next/link'
import { useState } from 'react'

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
    description: '',
    image: 'Gud2.jpg',
    tags: [],
  },
  {
    id: '003',
    title: 'Content Marketing',
    description: '',
    image: 'Gud3.jpg',
    tags: [],
  }
]

export default function ServiceDropdown() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-6 bg-white">
      <div className="w-full mx-auto divide-y divide-gray-200">
        <div className="flex flex-col md:flex-row p-0 gap-6 mb-12 md:justify-between items-center">
          <h1 className='text-4xl md:text-5xl max-w-[600px]'>Marketing Strategy solutions for you</h1>
          <div className="max-w-[400px]">
            <p className='m-0'>
              Several key factors, including market trends, the agency’s ability to  adapt
            </p>
            <Link href="/">View all services</Link>
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
                          <h3 className="flex-1 ml-4 font-bold text-gray-800">{item.title}</h3>
                          <span className="text-xl font-bold">{isOpen ? '−' : '+'}</span>
                  </div>
                  {isOpen && (
                    <div className="mt-4 flex flex-col md:flex-row md:items-start gap-6 px-2">
                      {/* Image */}
                      {item.image && (
                        <img src={item.image} alt={item.title} className="w-32 h-32 object-cover rounded-lg" />
                      )}

                      {/* Text & Link */}
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-3 max-w-[474px]">{item.description}</p>
                        <a href="#" className="text-sm font-medium text-gray-700 underline inline-flex items-center gap-1">
                          Learn more <span>↗</span>
                        </a>

                        {/* Tags */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.tags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700">
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
