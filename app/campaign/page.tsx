import React from 'react'
import Hero from '../components/Hero'
import Card from "../components/Card";
import Image from 'next/image';
import { FaRegLightbulb } from "react-icons/fa";
import { PiBinocularsLight } from "react-icons/pi";
import { LiaHandshake } from "react-icons/lia";
import DonateComponent from '../components/Donate';
import StepCard from "../components/WorkProcess"
import Campaign from '../components/Campaign';

const campaignValues = [
  {
    icon: <FaRegLightbulb/>,
    header: "Mission",
    description:
      "To spark a wave of creativity by encouraging everyone—regardless of background—to share one bold, original idea that could shape the future. The campaign exists to prove that even the simplest ideas can spark meaningful change when given a voice.",
      bgColor: "bg-purple-50"
  },
  {
    icon: <PiBinocularsLight/>,
    header: "Vision",
    description:
      "A world where innovative thinking is democratized—where anyone with an idea, no matter how small or wild, feels empowered to share it, refine it, and see it grow through community and technology.",
      bgColor: "bg-gray-50"
  },
  {
    icon: <LiaHandshake/>,
    header: "Principle",
    description:
      "The Gud AIDIA campaign is built on the belief that everyone has something valuable to contribute. We celebrate raw ideas over polished plans, curiosity over perfection, and progress over hesitation.",
      bgColor: "bg-blue-50"
  }
];


const page = () => {
  return (
    <main>
      <Hero header="The Gʊd AI'diə Campaign" subheader='Stirring Growth Through Literacy, Accessibility, and Opportunity' links/>
      <section className="py-16 px-6 max-w-6xl mx-auto pb-0">

        <div className="flex flex-col md:flex-row mb-12 gap-8 items-center">
          <div className="w-auto">
            <h1 className='text-2xl md:text-4xl font-bold mb-4'>What is the AI'diə Campaign?</h1>
            <h3 className='font-2xl font-semibold mb-2'>/Gud AI'adIə/ 'Good Idea!</h3>
            
            <p className='text-justify text-gray-900 leading-relaxed'>
              The Gud AI'diə Campaign is a dynamic initiative that merges our passion for personal growth with our commitment to literacy. We believe in the holistic development of athletes, fostering not only their physical prowess but also their intellectual curiosity and love for reading.

            </p>

          </div>

          <div className="flex-shrink-0">
              <Image
                src="/book-club.jpg"
                alt="DJ and DD"
                width={550}
                height={550}
                className="shadow-md"
              />
            </div>
        </div>
        
        
        <div className="py-10">
          <h1 className='text-center my-8 text-4xl font-bold'>Our MVP</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
              campaignValues.map((item, index) => {
                return (
                  <Card key={index} title={item.header} description={item.description} icon={item.icon} bgColor={item.bgColor}/>
                )
              })
            }
          </div>
        </div>
        <section className="px-6 py-12 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 text-left">Our Story</h2>
              <p className="text-gray-700 text-justify leading-relaxed">
                The Gud AIDIA Campaign began with two brothers, DJ and DD, who shared a love for stories and a deep curiosity about the world. What started as reading sessions at home soon grew into a vision for inspiring other young minds to explore books, creativity, and personal growth. Through laughter, discovery, and a shared passion, they planted the seed for what would become a powerful movement built on literacy, imagination, and togetherness.
              </p>
            </div>

            {/* Image */}
            <div className="flex-shrink-0">
              <Image
                src="/child-reader.jpg"
                alt="DJ and DD"
                width={550}
                height={550}
                className="shadow-md"
              />
            </div>
          </div>
        </section>
        
        
      </section>
      <StepCard/>
      <Campaign/>
      <DonateComponent/>
    </main>
  )
}

export default page