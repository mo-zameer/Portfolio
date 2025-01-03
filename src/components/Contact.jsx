import React from 'react'
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <div name='contact' className='w-full h-fit flex justify-center items-center py-24 px-4 bg-[#0a192f]'>
        <form action="" method="POST" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Let's talk!</p>
                <p className='text-gray-300 py-6'>//Get in touch.</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name="email" />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows={10} placeholder="Message"></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send <IoIosSend className=' ml-1 '/></button>
        </form>
    </div>
  )
}

export default Contact