import React, { useState } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa" //importing icons
import { HiOutlineMail } from 'react-icons/hi'
//import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav]=useState(false)
    function handleClick(){
        setNav(!nav)
    }
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0d2243] text-gray-300'>
        {/*(start hovering above)positon-fixed, width-100, height-80px, flex-justify-between(adds space)-items-center(align), padding in x-axis-4,bgcolor-0a192f text-color=gray with opacity*/}
        <div>
        <img src={Logo} alt="Logo img" style={{width: '50px'}}/>
        </div>

        {/*Menu*/}
        {/*md:flex is medium flex(mobile first design)*/}
        <ul className='hidden md:flex'>{/*md=768px is breakpoint(it wont show anything until 768px is reached)*/}
            <li><Link to="home" smooth={true}  duration={500} >Home</Link></li>
            <li><Link to="about" smooth={true}  duration={500} >About</Link></li>
            <li><Link to="skills" smooth={true}  duration={500} >Skills</Link></li>
            <li><Link to="work" smooth={true}  duration={500} >Work</Link></li>
            <li><Link to="contact" smooth={true}  duration={500} >Contact</Link></li>
        </ul>

        {/*Hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'>{/*when md is reached hamburger will be shown*/}
            {!nav? <FaBars />: <FaTimes />}
        </div>

        {/*Mobile Menu*/}
        {/*menu with padding 1.5rem*/}
        <ul className={!nav? 'hidden': 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192f]'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true}  duration={500} >Home</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true}  duration={500} >About</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true}  duration={500} >Skills</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true}  duration={500} >Work</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true}  duration={500} >Contact</Link></li>    
        </ul>

        {/*Social icon*/}
        <div className='fixed hidden lg:flex flex-col top-[35%] left-0'> {/*hidden lg: removed*/}
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#0A66C2]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://www.linkedin.com/in/mohammadzameer777" target="_blank">LinkedIn <FaLinkedin size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#24292e]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://github.com/mo-zameer" target="_blank">Github <FaGithub size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#08851b]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="mailto:mohammadzameer.work@gmail.com?subject=Regarding&body=Hey Zameer,">Email <HiOutlineMail size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://www.instagram.com/_mohammadzameer_/" target="_blank">Instagram <FaInstagram size={30}/></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar