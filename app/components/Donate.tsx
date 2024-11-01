import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Donate = () => {
  return (
    <div>
        <div className="py-5 text-center">
            <h1 className='text-gray-600'>DONATE</h1>
        </div>
        <div className="bg-[#4d724d] py-20 px-4 md:px-52 md:flex justify-center items-end text-white">
            <div className="md:w-1/2 md:pr-20">
                <p className="text-[20px]">Understanding that collective effort is key to success, we invite compassionate individuals to <b className='font-[700] text-[22px]'>join us on this mission</b>, whether through purchasing merch, donations - monetary and sports equipment, volunteerism, or spreading awareness… <br /><br /> Every contribution, no matter how small, makes a meaningful difference. <br /><br />Join us in defending the cause of literacy and athletic excellence, ensuring that no talented athlete is left behind due to personal growth or financial constraints.</p>
            </div>
            <div className="md:w-1/2 md:pl-20 pt-20 md:pt-0">
                <Image src={'/logo.png'} alt='logo' width={387} height={357}/>
                <p className="pt-10 pb-5"><Link href={''} className='hover:text-[#faf1cf] underline text-[22px]'>Donate a book</Link></p>
                <Link href={''} className='hover:text-[#faf1cf] underline text-[22px]'>Donate an amount</Link>
            </div>
        </div>
    </div>
  )
}

export default Donate