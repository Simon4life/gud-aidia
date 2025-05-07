import React from 'react';
import Image from 'next/image';

const OurWork = () => {
  return (
    <div className="w-full bg-gray-100">
      {/* Header Section */}
      <div className="py-16 text-center bg-green-600 text-white">
        <h1 className="text-5xl font-extrabold mt-10">How We Help</h1>
        <p className="mt-4 text-xl">We don’t do guesswork. We craft strategies that drive real </p>
      </div>
            {/* Section - How We Help */}
            <div className="bg-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-green-600">Why Work With Us?s</h2>
          <p className="mt-4 text-xl text-gray-600">We provide tailored strategies that align with your business goals to drive innovation, efficiency, and growth.</p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-6 bg-purple-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-green-600">Innovation Strategy</h3>
              <p className="mt-2 text-gray-600">We bring fresh, creative ideas tailored to your unique business needs.</p>
            </div>
            <div className="p-6 bg-purple-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-green-600">Growth Strategy</h3>
              <p className="mt-2 text-gray-600">We bring fresh, creative ideas tailored to your unique business needs.</p>
            </div>
            <div className="p-6 bg-purple-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-green-600">Client-Centric Solutions</h3>
              <p className="mt-2 text-gray-600">We prioritize your goals and work collaboratively to bring your vision to life.</p>
            </div>
            <div className="p-6 bg-purple-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-green-600">Proven Results</h3>
              <p className="mt-2 text-gray-600">Our strategies have a track record of driving success and growth for our clients.</p>
            </div>
            <div className="p-6 bg-purple-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-green-600">Personalized Approach</h3>
              <p className="mt-2 text-gray-600">Tailored services to meet your unique needs and ideas, ensuring a customized experience.</p>
            </div>
            <div className="p-6 bg-purple-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-green-600">Actionable Results</h3>
              <p className="mt-2 text-gray-600">Tangible outcomes that move your ideas from conception to implementation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Header */}
      <div className='w-full bg-gray-100'>
        <div className="py-16 text-center text-purple-600">
          <h1 className="text-3xl font-extrabold mt-10">Work and accomplishments: </h1>
          <p className="mt-4 text-xl">At The Gud Aidia Company, we leverage our expertise to deliver impactful solutions across various domains. Here’s a snapshot of our recent projects and achievements based on the specific need of business </p>
        </div>
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
              <h3 className="text-2xl font-semibold text-purple-600">Proposal Response Format Development and Website Revamp:</h3>
              <p className="mt-2 text-gray-600"><b> </b>Cybersecurity Firm
              Enhanced the proposal response format and provided strategic direction for a website overhaul, resulting in a more professional and engaging presentation and improved client acquisition
              </p>
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
              <h3 className="text-2xl font-semibold text-purple-600">Comprehensive Growth Strategy:</h3>
              <p className="mt-2 text-gray-600">Basketball training business </p>
            </div>
          </div>

          {/* Project 4 */}
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
              <h3 className="text-2xl font-semibold text-purple-600">4.Product Advisory and Sales Platform Development:</h3>
              <p className="mt-2 text-gray-600"><b>Gift and décor business
              Product Selection Advisory:</b> Providing expert advice on selecting and curating products for an existing gift and decor company, helping to optimize the product line to meet market demand and enhance sales opportunities. <br></br>
              <b>Sales Platform Setup: </b>Established a new platform for the company to facilitate the sale of goods, including designing and implementing a user-friendly system for listing and managing inventory, and creating an effective sales channel.
              </p>
            </div>
          </div>




        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">      
                {/* Project 5 */}

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
              <h3 className="text-2xl font-semibold text-purple-600">3. Soccer Coaching Academy Development: </h3>
              <p className="mt-2 text-gray-600">  ongoing work in establishing a soccer coaching academy focused on training future coaches:
              <b>Requirements Gathering: </b>Actively identifying and documenting the essential requirements for establishing a soccer coaching academy, including necessary facilities, staffing, curriculum, and training resources. <br />
              <b>Strategic Planning: </b>Providing strategic insights and innovative ideas to shape the academy’s structure and programs, focusing on effective coach training methodologies and industry best practices.
              Program Development: Designing and developing comprehensive training modules and certification programs aimed at equipping individuals with the skills and knowledge needed to become successful soccer coaches. <br />
              <b>Concept Refinement:</b> Continuously refining the academy’s concept to ensure it aligns with market needs and educational standards, including establishing performance metrics and long-term goals <br />
              </p>
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
              <h3 className="text-2xl font-semibold text-purple-600">Comprehensive Business Development and Marketing Initiatives:</h3>
              <p className="mt-2 text-gray-600"><b>Technology Procurement, Business Partner/Reseller List Development:</b> Compiled a targeted list of potential business partners and resellers, identifying key opportunities to expand the company’s network and drive growth. <br></br>
             <b>Business Partner/Reseller List Development:</b>Led a complete overhaul of the company’s website, enhancing user experience, modernizing design, and optimizing functionality to align with brand objectives and improve engagement. <br></br>
             <b>Marketing Strategy Development:</b> Designed and produced essential marketing materials, including personal statements, call cards, and other promotional assets, to effectively communicate brand messages and support marketing and sales efforts. <br></br>
      
              </p>
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
