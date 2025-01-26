import React from 'react'
import GridImage from './GridImage'
import Color from './Color'

const Case = () => {
  return (
    <div>
        <div className="py-5 text-center">
          <h1 className='text-purple-600 text-5xl font-extrabold'>SERVICES</h1>
        </div>
        <div className="grid md:grid-cols-4 ">
           <GridImage heading='Brand Renaissance' link='' pic="/homeservice1.jpg" text='Revitalizing and evolving brand identities to ensure relevance and impactful engagement with target audiences. SB'/>
           <Color color='bg-yellow-300' />
           <GridImage heading='Business Strategy Alignment' link='' pic="/homeservice2.jpg" text='Providing expert advice and insights to align business operations with market trends and future goals, driving strategic growth. SU & NV'/>
           <Color color='bg-teal-300' />
           <Color color='bg-pink-300' />
           <GridImage heading='Digital Positioning and Transformation' link='' pic="/homeservice3.jpg" text='Optimizing and leveraging digital strategies to achieve a specific market position or advantage. (market differentiation).  SME/EB'/>
           <Color color='bg-blue-300' />
           <GridImage heading='Excellence Optimization' link='' pic="/homeservice4.jpg" text='Streamlining and enhancing business processes to achieve peak efficiency, cost reduction, and superior performance. SME/EB'/>
           <GridImage heading='Innovative Solutions Management' link='' pic="/homeservice5.jpg" text='Guiding businesses through the complete innovation lifecycle, from conceptualization to implementation, to maintain a competitive edge. MB'/>
           <Color color='bg-purple-300' />
           <GridImage heading='Holistic Growth Design' link='' pic="/homeservice6.jpg" text='Delivering comprehensive strategies for sustainable business growth that aligns with long-term objectives and vision. SB'/>
           <Color color='bg-orange-300' />
           
        </div>
    </div>
  )
}

export default Case