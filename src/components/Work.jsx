import React from 'react'
import Emploverse from '../assets/projects/Emploverse.jpg'
import Scribly from '../assets/projects/Scribly.jpg'
import NewsAlanAI from '../assets/projects/News.png'
import Resto from '../assets/projects/Resto.jpg'
import Suiichat from '../assets/projects/Suiichat.jpg'
import Portfolio from '../assets/projects/Portfolio.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full h-fit pt-24 pb-24  bg-[#0a192f] text-gray-300'>
        {/*container for heading*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>//Following projects showcases my skills and experience through real-world examples of my work.</p>
            </div>

            {/*container for project*/}
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>

                {/*Grid item*/}
                <div style={{backgroundImage: `url(${Emploverse})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover effects */}
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                        <span className='tex-2xl font-bold text-white tracking-wider'>Emploverse</span>
                        <div className='pt-8 text-center'>
                            {/*<a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                            </a>*/}
                            <a href="https://github.com/mo-zameer/Emploverse" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/*Grid item*/}
                <div style={{backgroundImage: `url(${Resto})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover effects */}
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                        <span className='tex-2xl font-bold text-white tracking-wider'>Resto</span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/mo-zameer/Resto" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/*Grid item*/}
                <div style={{backgroundImage: `url(${Scribly})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover effects */}
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                        <span className='tex-2xl font-bold text-white tracking-wider'>Scribly</span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/mo-zameer/Scribly" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/*Grid item*/}
                <div style={{backgroundImage: `url(${Suiichat})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover effects */}
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                        <span className='tex-2xl font-bold text-white tracking-wider'>Suiichat</span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/mo-zameer/Suiichat" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/*Grid item*/}
                <div style={{backgroundImage: `url(${NewsAlanAI})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover effects */}
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                        <span className='tex-2xl font-bold text-white tracking-wider'>News by AlanAI</span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/mo-zameer/Voice-based-news-reader-app" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/*Grid item*/}
                <div style={{backgroundImage: `url(${Portfolio})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover effects */}
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                        <span className='tex-2xl font-bold text-white tracking-wider'>Portfolio</span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/mo-zameer/Portfolio" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default Work