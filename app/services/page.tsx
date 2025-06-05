import React from "react";
import { MdArrowUpward } from "react-icons/md";
import Hero from "../components/Hero";
import { StepCard } from "../components/WorkProcess";
import { IoShieldCheckmarkOutline, IoBarChartOutline, IoTrophyOutline } from "react-icons/io5";

const projects = [
    {
      title: "Website Revamp - Cybersecurity Firm",
      description:
        "Enhanced the proposal response format and provided strategic direction for a website overhaul. Resulted in a more professional and engaging presentation and improved client acquisition.",
        icon: <IoShieldCheckmarkOutline/>
    },
    {
      title: " Business Development and Marketing Initiatives",
      description:
        "Compiled a targeted list of potential business partners and resellers, identifying key opportunities to expand the company’s network and drive growth.",
        icon: <IoBarChartOutline/>
    },
    {
      title: "Soccer Coaching Academy Development (Ongoing)",
      description:
        "Identified and documented essential requirements for establishing a soccer coaching academy, including facilities, staffing, and curriculum.",
        icon: <IoTrophyOutline/>
    }
  ];
  
const services = [
  {
    title: "Brand Renaissance",
    description: "Revitalizing and evolving brand identities to ensure relevance and impactful engagement with target audiences.",
    color: "bg-purple-100",
    icon: "🗨️"
  },
  {
    title: "Business Strategy Alignment",
    description: "Providing expert advice and insights to align business operations with market trends and future goals, driving strategic growth.",
    color: "bg-neutral-50",
    icon: "🔍"
  },
  {
    title: "Digital Positioning and Transformation",
    description: "Optimizing and leveraging digital strategies to achieve a specific market position or advantage (market differentiation)",
    color: "bg-blue-100",
    icon: "✉️"
  },
  {
    title: "Excellence Optimization",
    description: "Streamlining and enhancing business processes to achieve peak efficiency, cost reduction, and superior performance.",
    color: "bg-yellow-100",
    icon: "📣"
  },
  {
    title: "Innovative Solutions Management",
    description: "Guiding businesses through the complete innovation lifecycle, from conceptualization to implementation, to maintain a competitive edge.",
    color: "bg-green-100",
    icon: "🎯"
  },
  {
    title: "Holistic Growth Design",
    description: "Delivering comprehensive strategies for sustainable business growth that aligns with long-term objectives and vision.",
    color: "bg-rose-100",
    icon: "➡️"
  }
];

export default function MarketingServicesGrid() {
  return (
    <>
    <Hero header="Our Services" subheader="We offer a comprehensive suite of services designed to drive business success through innovative strategies and creative solutions." />
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Our Marketing Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ title, description, color, icon }) => (
          <div
            key={title}
            className={`p-6 rounded-md border shadow-sm ${color}`}
          >
            <div className="text-3xl mb-4">{icon}</div>
            <h2 className="text-xl font-semibold mt-16 text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-700 mb-4 text-sm text-justify leading-relaxed">{description}</p>
            <button className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 group-hover:underline">
              Learn more <MdArrowUpward className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
    <section className="px-6 md:px-12 py-20 max-w-7xl bg-gray-50 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            projects.map((project, index) => {
                return (
                    <StepCard key={index} title={project.title} icon={project.icon} description={project.description} />
                )
            })
        }
        </div>
        
    </section>
    </>
    
  );
}
