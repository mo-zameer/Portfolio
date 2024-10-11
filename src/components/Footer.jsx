import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa" //importing icons
import { HiOutlineMail } from 'react-icons/hi'

const date= new Date();
const year=date.getFullYear();

const Footer = () => {
  return (
    <footer className='w-full text-center p-8 text-gray-300 bg-[#0d2243]'>
        <div className=' mb-4 flex flex-row justify-center gap-8'>
            <a href="https://www.linkedin.com/in/mohammadzameer777" target="_blank"><FaLinkedin size={30}/></a>
            <a href="https://github.com/mo-zameer" target="_blank"><FaGithub size={30}/></a>
            <a href="mailto:mohammadzameer.work@gmail.com?subject=Regarding&body=Hey Zameer,"><HiOutlineMail size={30}/></a>
            <a href="https://www.instagram.com/_mohammadzameer_/" target="_blank"><FaInstagram size={30} /></a>
        </div>
        <div className=''>
            <p>&copy; {year} Mohammad Zameer</p>
        </div>
    </footer>
  )
}

export default Footer