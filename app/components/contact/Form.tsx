import React from 'react'

const Form = () => {
  return (
    <div>
        <div className="px-40 py-20 bg-[#0b4141] contactimage">
            <form action="">
                <div className="flex justify-center items-center pb-5">
                    <input type="text" name="" id="" placeholder='Name *' className='outline-none p-2 mr-3 w-full bg-[#FFFFF0]' />
                    <input type="email" name="" id="" placeholder='Email *' className='outline-none p-2 ml-3 w-full bg-[#FFFFF0]' />
                </div>
                <input type="text" name="" id="" placeholder='Subject' className='outline-none p-2 mb-5 w-full bg-[#FFFFF0]' />
                <textarea name="" id="" placeholder='Message' rows={5} className='resize-none mb-5 w-full bg-[#FFFFF0] p-2'></textarea>
                <input type="submit" value="Submit" className='bg-[#8db48e] p-2 w-full cursor-pointer hover:bg-[#F7E7CE] hover:text-[#020035]' />
            </form>
        </div>
    </div>
  )
}

export default Form