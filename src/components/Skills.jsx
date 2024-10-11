import React from "react"

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Postman from '../assets/postman.png';
//import Tailwind from '../assets/tailwind.png';
import PythonImg from '../assets/Python.png'
import PostgreSQL from '../assets/postgresql.png'
import Express from '../assets/express.png';
import MongoDB from "../assets/MongoDB.png";
import Git from "../assets/Git.png"

const Skills=()=>{
    return( 
        <div name='skills' className="w-full h-fit pt-24 pb-24  bg-[#0a192f] text-gray-300">
            {/*Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
                    <p className="py-6">//These are the technologies I've worked with</p>
                </div>

                {/*Container for icons*/}
                <div className=" w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center py-8">
                    
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
                        <p className="my-4">React.js</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Node} alt="Node icon" />
                        <p className="my-4">Node.js</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Express} alt="Express icon" />
                        <p className="my-4">Express.js</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={MongoDB} alt="MongoDB icon" />
                        <p className="my-4">Mongo DB</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript icon" />
                        <p className="my-4">JavaScript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={PythonImg} alt="Python icon" />
                        <p className="my-4">Python</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={PostgreSQL} alt="PostgreSQL icon" />
                        <p className="my-4">PostgreSQL</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Git} alt="Git icon" />
                        <p className="my-4">Git</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={GitHub} alt="GitHub icon" />
                        <p className="my-4">GitHub</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Postman} alt="Postman icon" />
                        <p className="my-4">Postman</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills