import React from 'react'
import GridImage from '../components/GridImage'
import ColorWriteUp from '../components/ColorWriteUp'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <div className="pt-16"></div>
        <div className="grid grid-cols-2 md:grid-cols-4">
            <ColorWriteUp heading='Innovative Solutions' text='We bring fresh, creative ideas tailored to your unique business needs.' color='bg-[#8db48e]' />
            <ColorWriteUp heading='Experienced Advisors' text='Our team of seasoned professionals offers valuable insights and expertise.' color='' />
            <GridImage heading='Cybersecurity Firm' link='' pic="/cybersecurity.jpg" text='Proposal Response Format Development and Website Revamp'/>
            <ColorWriteUp heading='Client-Centric Approach' text='We prioritize your goals and work collaboratively to bring your vision to life.' color='' />
            
            <ColorWriteUp heading='Proven Results' text='Our strategies have a track record of driving success and growth for our clients.' color='bg-[#8db48e]' />
            <GridImage heading='Technology Procurement' link='' pic="/technology.jpg" text='Comprehensive Business Development and Marketing Initiatives'/>
            <ColorWriteUp heading='Personalized Approach' text='Tailored services to meet your unique needs and ideas, ensuring a customized experience.' color='' />
            <GridImage heading='Soccer Coaching Academy Development' link='' pic="/soccer.jpg" text='Ongoing work in establishing a soccer coaching academy focused on training future coaches'/>

            <GridImage heading='Gift and décor business' link='' pic="/gift.jpg" text='Product Advisory and Sales Platform Development'/>
            <ColorWriteUp heading='Actionable Results' text='Tangible outcomes that move your ideas from conception to implementation.' color='' />
            <GridImage heading='Basketball training business ' link='' pic="/basketball.jpg" text='Comprehensive Growth Strategy'/>
            <Link href={'/about'}><ColorWriteUp heading='' text='Ready to take your business to the next level? Contact The Gud Aidia Company today and discover how we can help you innovate, grow, and succeed.' color='' /></Link>

        </div>
    </div>
  )
}

export default page