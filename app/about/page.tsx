import React from 'react'
import Hero from '../components/Hero'
import {FaTerminal, FaLightbulb} from "react-icons/fa"

const teamMembers = [
  {
    name: 'John Michael',
    role: 'Project Manager',
    description: 'Excellent organizational skills',
    image: 'https://via.placeholder.com/300x300',
  },
  {
    name: 'John Michael',
    role: 'SEO Specialist',
    description: 'Communication, multitasking.',
    image: 'https://via.placeholder.com/300x300',
  },
  {
    name: 'John Michael',
    role: 'CO Founder',
    description: 'Graphic design, UI/UX, branding.',
    image: 'https://via.placeholder.com/300x300',
  },
  {
    name: 'John Michael',
    role: 'Content Writer',
    description: 'Social media strategy, analytics',
    image: 'https://via.placeholder.com/300x300',
  },
  {
    name: 'John Michael',
    role: 'Social Media Specialist',
    description: 'Server-side languages Node JS',
    image: 'https://via.placeholder.com/300x300',
  },
  {
    name: 'John Michael',
    role: 'Brand Designer',
    description: 'JavaScript, and responsive web.',
    image: 'https://via.placeholder.com/300x300',
  },
];

const reasons = [
  {
    title: 'Tailored Strategies',
    description: 'Our team works closely with you to understand your unique business goals and create customized strategies that drive measurable results.',
  },
  {
    title: 'Innovative Solutions',
    description: 'We stay ahead of the curve, using the latest technologies and industry trends to deliver cutting-edge solutions that keep your business competitive.',
  },
  {
    title: 'Scalable Solutions',
    description: 'Our solutions are designed to grow with your business, ensuring long-term success and adaptability in a changing market.',
  },
];


const page = () => {
  return (
    <>
    <Hero header='Innovative solutions for brands' subheader='Enjoy exclusive benefits premium innovative solutions for brands to our subscribers.'/>
    <section className='max-w-6xl mx-auto px-6 py-16'>
      <article>
      <div className='max-w-6xl mx-auto'>
            <div className="section-header">
                <div className='flex items-center mb-4'>
                    <span className='w-3 h-3 inline-block bg-purple-400 rounded-full mr-2'></span>
                    <p>Our Values</p>
                </div>
                
                <h2 className="text-xl text-left font-semibold p-0 md:text-3xl lg:text-4xl mb-8 leading-relaxed">
                We are a team of strategic innovators who believe that every idea has a story.
                At The Gʊd Aɪˈdiə Company, our mission is to bring that story to life through bold strategy, creative thinking, and purpose-driven growth.
                </h2>
            </div>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div>
            <h2 className="text-xl font-semibold mb-4">Our Goal is Clear</h2>
            <p className="text-gray-700 max-w-xl">
              As a one-stop-shop for all things digital marketing, we help businesses navigate the complexities of the online world and build lasting success through strategy.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Our Goal is Clear</h2>
            <p className="text-gray-700 max-w-xl">
              As a one-stop-shop for all things digital marketing, we help businesses navigate the complexities of the online world and build lasting success through strategy.
            </p>
          </div>
        </div>
        
      </article>
      <div className="">
        <div className='flex my-12 justify-between items-center'>
          <h2 className="text-2xl font-semibold mb-6">Marketing for Lasting Impact</h2>
          <p className="text-gray-700 max-w-xl text-right">
            We understand your vision and bring a strategic approach to help you grow over time.
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-8">
          <div className="w-full h-full max-w-3xl mx-auto flex-grow basis-0">
              <div className="relative overflow-hidden">
                <img
                src="/Gud3.jpg"
                alt="group of worker"
                className="h-full"/>
              </div>
          </div>
          <div className="grow-[2] basis-0 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="pt-6 border-t-2 border-gray-300">
              <h2 className='text-2xl mb-4'>Vision into reality</h2>
              <p className=''>Whether you're a startup or a well-established enterprise, we offer flexible solutions that grow with you.</p>
            </div>
            <div className="pt-6 border-t-2 border-gray-300">
              <h2 className='text-2xl mb-4'>Vision into reality</h2>
              <p className=''>Whether you're a startup or a well-established enterprise, we offer flexible solutions that grow with you.</p>
            </div>
            <div className="pt-6 border-t-2 border-gray-300">
              <h2 className='text-2xl mb-4'>Vision into reality</h2>
              <p className=''>Whether you're a startup or a well-established enterprise, we offer flexible solutions that grow with you.</p>
            </div>
            <div className="pt-6 border-t-2 border-gray-300">
              <h2 className='text-2xl mb-4'>Vision into reality</h2>
              <p className=''>Whether you're a startup or a well-established enterprise, we offer flexible solutions that grow with you.</p>
            </div>
          </div>
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
      <div className="flex flex-col lg:flex-row max-w-6xl px-6 py-16 items-center justify-between gap-8 bg-gray-50 rounded-2xl">
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
          src="/path-to-your-image.jpg"
          alt="Team working on a laptop"
          className="rounded-2xl shadow-lg max-w-full"
        />
      </div>
    </div>
    
    </>
  )
}

export default page