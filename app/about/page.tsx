import React from 'react'
import Hero from '../components/Hero'
import {FaTerminal, FaLightbulb} from "react-icons/fa"
import Image from 'next/image';

const teamMembers = [
  {
    name: 'John Michael',
    role: 'Project Manager',
    description: 'Excellent organizational skills',
    image: '/worker.jpg',
  },
  {
    name: 'John Michael',
    role: 'SEO Specialist',
    description: 'Communication, multitasking.',
    image: '/worker.jpg',
  },
  {
    name: 'John Michael',
    role: 'CO Founder',
    description: 'Graphic design, UI/UX, branding.',
    image: '/worker.jpg',
  },
];


const companyStories = [
  {
    header: "From Vision to Reality",
    text: "From strategic blueprints to tangible outcomes, our expert team in New Jersey is turning innovative ideas into sustained business success."
  },
  {
    header: "Bringing Innovation to Life",
    text: "From initial conceptualization to seamless implementation, we guide businesses through every stage of the innovation lifecycle."
  },
  {
    header: "Empowering Businesses to Excel",
    text: "From aligning operations with market trends to optimizing for peak efficiency, we are dedicated to helping businesses achieve superior performance and sustainable success."
  },
  {
    header: "Sparking Change",
    text: "From storytelling to social impact, our chapters across communities are turning small acts of reading into movements of growth. Our client-centric approach ensures that we work to bring your vision to life."
  }
];
const page = () => {
  return (
    <>
    <Hero header='Innovative solutions for brands' subheader='Enjoy exclusive benefits premium innovative solutions for brands to our subscribers.'/>
    <section className="max-w-6xl mx-auto px-6 py-16">
        <article>
          <div className="section-header mb-12">
            <div className="flex items-center mb-4">
              <span className="w-3 h-3 bg-purple-500 rounded-full mr-2" />
              <p className="text-purple-700 font-medium">Our Values</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-justify leading-relaxed">
              The Gʊd AI'diə Campaign was born from two brothers' love for reading. We're on a mission to cultivate a culture of curiosity, literacy, and community empowerment through books, storytelling, and shared experiences.
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-2">Why We Started</h3>
              <p className="text-gray-700 max-w-xl">
                It began with DJ and DD reading together—and wondering how they could share that joy with others. What followed was the seed of a national reading movement.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What Drives Us</h3>
              <p className="text-gray-700 max-w-xl">
                Every idea deserves to grow. We provide tools, encouragement, and community to help kids and families plant and grow theirs.
              </p>
            </div>
          </div>
        </article>

        {/* Campaign Story Section */}
        <div className="flex flex-col md:flex-row gap-12 mt-20 items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/Gud3.jpg"
              alt="Gud Aidia kids reading"
              width={400}
              height={400}
              className="rounded-md shadow-md object-cover w-full"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full md:w-1/2">
            {companyStories.map((story, i) => (
              <div key={i} className="pt-6 border-t-2 border-gray-300">
                <h3 className="text-xl font-semibold mb-2">{story.header}</h3>
                <p className='text-sm text-justify'>
                  {story.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      
      <section className="bg-white py-16">
        <h2 className="text-2xl font-semibold text-center mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md group">
              <div className="relative">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <span className="absolute top-2 left-2 bg-white text-sm text-gray-800 font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  {member.role}
                </span>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>.
    <div className="w-full px-6 py-16 bg-gray-50 rounded-2xl">
      <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto justify-between gap-8">
        {/* Left Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl font-bold mb-4">Reason to choose us</h2>
        <p className="text-gray-600 mb-8">
          Benefits premium innovative solutions for brands to our subscribers.
        </p>

        {/* Reasons List */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <FaTerminal className="text-purple-500 w-6 h-6" />
            <div>
              <h3 className="text-xl font-semibold">Tailored Strategies</h3>
              <p className="text-gray-600">
                Our team works closely with you to understand your unique business goals and create customized strategies that drive measurable results.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaLightbulb className="text-purple-500 w-6 h-6" />
            <div>
              <h3 className="text-xl font-semibold">Innovative Solutions</h3>
              <p className="text-gray-600">
                We stay ahead of the curve, using the latest technologies and industry trends to deliver cutting-edge solutions that keep your business competitive.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaTerminal className="text-purple-500 w-6 h-6" />
            <div>
              <h3 className="text-xl font-semibold">Scalable Solutions</h3>
              <p className="text-gray-600">
                Whether you're a startup or a well-established enterprise, we offer flexible solutions that grow with you to support your long-term goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src="/Gud5.jpg"
          alt="Team working on a laptop"
          className="rounded-2xl shadow-lg max-w-full"
        />
      </div>
      </div>
      
    </div>
    
    </>
  )
}

export default page