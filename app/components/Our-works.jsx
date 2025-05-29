"use client"
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const caseStudies = [
  {
    id: 0,
    title: 'Cybersecurity Proposal Revamp',
    description: 'Improved proposal structure and website presentation for a leading cybersecurity firm.',
    image: '/basketball.jpg',
  },
  {
    id: 1,
    title: 'Soccer Academy Development',
    description: 'Built a structured soccer coaching program focused on literacy and sports leadership.',
    image: '/Gud2.jpg',
  },
  {
    id: 2,
    title: 'Gift & Decor Sales Platform',
    description: 'Set up a modern e-commerce platform for a boutique gift business.',
    image: '/Gud5.jpg',
  },
]

export default function CaseStudyScroller() {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <section className="">
      <div className="text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Case Studies
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto text-base">
          Explore how The Gʊd Aɪˈdiə Company has driven strategy and impact across sectors.
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto py-16 px-4 gap-8">
      {/* Left Section (Text blocks stacked) */}
      <div className="flex-1 space-y-24">
        {caseStudies.map((item, i) => {
          const [ref, inView] = useInView({ threshold: 0.5 })

          useEffect(() => {
            if (inView) setActiveImage(i)
          }, [inView, i])

          return (
            <div
              key={i}
              ref={ref}
              className={`pl-6 border-l-4 transition-all duration-300 ${
                activeImage === i ? 'border-black' : 'border-gray-300'
              }`}
            >
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-base max-w-md mb-4">{item.description}</p>
              <a href="#" className="text-sm font-medium text-black underline inline-flex items-center gap-1">
                Learn more <span>↗</span>
              </a>
            </div>
          )
        })}
      </div>

      {/* Right Section (Image is sticky and changes) */}
      <div className="hidden md:block w-1/2">
        <div className="sticky top-32 h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
          <img
            src={caseStudies[activeImage].image}
            alt={caseStudies[activeImage].title}
            className="w-full h-full object-cover transition duration-500"
          />
        </div>
      </div>
    </div>
    </section>
    
  )
}
