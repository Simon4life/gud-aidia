import Image from 'next/image'
import React from 'react'

const Mvp = () => {
  return (
    <div className='bg-[#4d724d] flex p-20 justify-center items-center text-white gap-5' id='mvp'>
        <div className="w-1/2">
            <h1 className="font-[700] pb-5 text-[46px]">Our MVP</h1>
            <p className="text-[20px] pb-3">
                <span className="font-[700]">Mission: </span>To drive businesses success through innovative strategies and creative solutions. 
            </p>
            <p className="text-[20px] pb-3">
                <span className="font-[700]">Vision: </span>To be the top growth enablement firm offering innovative and growth strategies needed by businesses to achieve sustainable success. 
            </p>
            <p className="text-[20px] pb-3">
                <span className="font-[700]">Principles: <i>RISE</i> </span><br />
                <span className="font-[700] text-[25px]">R</span>esilience: We stay committed to our clients&apos; success, overcoming challenges and adapting to change with unwavering dedication.<br />
                <span className="font-[700] text-[25px]">I</span>nnovation: We constantly seek out and apply the most creative, forward-thinking solutions to drive business growth and transformation.<br />
                <span className="font-[700] text-[25px]">S</span>ervice Excellence: We deliver outstanding results through exceptional service, ensuring that every client experience is positive and impactful.<br />
                <span className="font-[700] text-[25px]">E</span>mpowerment: We equip our clients with the knowledge, tools, and confidence they need to succeed, making them active participants in their own transformation.<br />
            </p>
        </div>
        <div className="w-1/2"><Image src={'/research.png'} alt='our mvp' width={500} height={500} className='aboutimage'/></div>
    </div>
  )
}

export default Mvp