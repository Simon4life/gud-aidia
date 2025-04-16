import React from 'react'
import GridImage from './GridImage'

const Services = () => {
  return (
    <div>
        <div className="py-5 text-center">
            <h1 className='text-purple-600 text-5xl font-extrabold '>Our Expertise</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
           <GridImage heading='Our MVP' pic="/apple.jpg" text='' link='/about#mvp'/>
           <GridImage heading='About Us' pic="/plane.jpg" text='' link='/about'/>
           <GridImage heading='CSM/EDF Algorithm' pic="/apt.jpg" text='' link='/work'/>
           <GridImage heading='Works' pic="/compass.jpg" text='' link='/work'/>
           {/* <GridImage heading='Register' pic="/register.jpg" text='' link='/'/>
           <GridImage heading='Donate' pic="/donate.jpg" text='' link='/'/>
           <GridImage heading='Contact Us' pic="/contact.jpg" text='' link='/contact'/>
           <GridImage heading='The Gʊd Aɪˈdiə Campaign' pic="/campain.jpg" text='' link='/'/> */}
           
        </div>
    </div>
  )
}

export default Services