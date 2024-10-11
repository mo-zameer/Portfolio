import React from 'react'
import { HiDownload } from 'react-icons/hi'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/*Container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-2xl text-pink-600'>Hello, I'm</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Mohammad Zameer</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>An individual with passion for web development having expertise in many different front end and back end languages, responsive frameworks and databases.</p>
        
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>{/*group is for grouping buttontext and icon*/}
            <a href="/MohammadZameer_Resume.pdf" download>Download CV</a>
            <HiDownload className='ml-1'/>
          </button>
        </div>

      </div>


    </div>
  )
}

export default Home