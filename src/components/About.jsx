import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            {/*Container*/}
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'> 
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p> {/*Border gives the underline */}
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Zameer, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React, Node.js, etc. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About