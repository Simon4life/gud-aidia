import React from 'react';
import Image from 'next/image';

const OurWork = () => {
  return (
    <div className="w-full bg-gray-100">
      {/* Header Section */}
      <div className="py-16 text-center bg-green-600 text-white">
        <h1 className="text-5xl font-extrabold mt-10">OUR WORK</h1>
        <p className="mt-4 text-xl">See how we help businesses grow with innovative strategies and creative solutions.</p>
      </div>

      {/* Our Work Showcase */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <a href="https://www.affinity-it.com/">
              <Image
                src="/affinity.jpg" // Replace with the correct path if necessary
                alt="Project 1"
                width={800} // Add width
                height={400} // Add height
                className="w-full h-56 object-cover"
              />
            </a>
            
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-purple-600">ICT Resource Biz:</h3>
              <p className="mt-2 text-gray-600"><b> </b>We remodeled and redesigned the ICT Resource Biz website, enhancing its visual appeal and functionality. The site now features a modern design, an improved campaign layout, a complete ICT services revamp, and SEO optimization for better visibility and performance..</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <a href="https://ictresources.biz/">
              <Image
                src="/ict.jpg" // Replace with the correct path if necessary
                alt="Project 2"
                width={800} // Add width
                height={400} // Add height
                className="w-full h-56 object-cover"
              />
            </a>
            
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-purple-600">Affinity IT:</h3>
              <p className="mt-2 text-gray-600"> For Affinity IT, we delivered a full website revamp, with a fresh design focused on cybersecurity services. We also updated their campaign features and implemented a comprehensive SEO strategy to ensure optimal reach and search engine performance.</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <a href="https://campaign.gudaidia.com/">
              <Image
                src="/cam.jpg" // Replace with the correct path if necessary
                alt="Project 3"
                width={800} // Add width
                height={400} // Add height
                className="w-full h-56 object-cover"
              />
            </a>
          
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-purple-600">Gud Aidia Campaign:</h3>
              <p className="mt-2 text-gray-600"> We redesigned the Gud Aidia Campaign website, creating a visually engaging platform for the book club and campaign initiatives. The overhaul includes a streamlined design, updated ICT features, and SEO optimization to increase discoverability and engagement.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Section - How We Help */}
      <div className="bg-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-green-600">How We Help Our Clients</h2>
          <p className="mt-4 text-xl text-gray-600">We provide tailored strategies that align with your business goals to drive innovation, efficiency, and growth.</p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-6 bg-purple-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-green-600">Innovation Strategy</h3>
              <p className="mt-2 text-gray-600">Our team works closely with you to develop forward-thinking strategies that foster creativity and innovation, driving business growth.</p>
            </div>
            <div className="p-6 bg-purple-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-green-600">Growth Strategy</h3>
              <p className="mt-2 text-gray-600">We help businesses scale by implementing effective growth strategies, focusing on operational efficiency, and market expansion.</p>
            </div>
            <div className="p-6 bg-purple-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-green-600">Client-Centric Solutions</h3>
              <p className="mt-2 text-gray-600">Our solutions are designed around your specific needs, ensuring that we deliver impactful and sustainable results for your business.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-600 py-16 text-center text-white">
        <h2 className="text-4xl font-extrabold">Ready to Take Your Business to the Next Level?</h2>
        <p className="mt-4 text-xl">Lets work together to create innovative strategies that will drive your business success.</p>
        <a
          href="#contact"
          className="mt-8 inline-block bg-white text-purple-600 py-2 px-6 rounded-lg text-lg font-semibold hover:bg-purple-100 transition-all"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default OurWork;
