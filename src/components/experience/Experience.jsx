import React from 'react'
import { FaCss3, FaHtml5, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'
import {DiMysql} from 'react-icons/di'
import{ SiMongodb } from 'react-icons/si'
import { LuDatabase } from 'react-icons/lu'


function Experience() {
  return (
    <div id='Experience' className='p-10 md:p-24'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Skills</h1>
        <div className='flex flex-wrap items-center justify-around'>
            <div className='flex flex-wrap md:w-full justify-center gap-8 md:p-12 py-10'>
                <div>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaHtml5 color='#E34F26' size={50}/>
                </span>
                <p className='text-white font-bold text-center'>HTML5</p>
                </div>

                <div>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaCss3 color='#1572b6' size={50}/>
                </span>
                <p className='text-white font-bold text-center'>CSS3</p>
                </div>

                <div>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaJs color='yellow' size={50}/>
                </span>
                <p className='text-white font-bold text-center'>JavaScript</p>
                </div>

                <div>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaReact color='#61DAFB' size={50}/>
                </span>
                <p className='text-white font-bold text-center'>ReactJS</p>
                </div>

                <div>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaNodeJs color='#68a063' size={50}/>
                </span>
                <p className='text-white font-bold text-center'>NodeJS</p>
                </div>

                <div>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <SiMongodb color='#4DB33D' size={50}/>
                </span>
                <p className='text-white font-bold text-center'>MongoDB</p>
                </div>

                <div>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <DiMysql color='#00758F' size={50}/>
                </span>
                <p className='text-white font-bold text-center'>MySQL</p>
                </div>
               
            </div>

            <div className='flex flex-wrap gap-5 mt-5 md:mt-20'>
             <div className='flex gap-10 w-70 md:w-80 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                <FaHtml5 color='#E34F26' size={50}/>
                <span className='text-white'>
                    <h2>Frontend Technology</h2>
                    {/* <p className='text-sm leading-tight font-thin'>Sept 2023 - Present</p> */}
                    <ul className='text-sm p-2'>
                        <li>- HTML, CSS,</li>
                        <li>- TailwindCss, ReactJS</li>
                    </ul>
                </span>
             </div>
             <div className='flex gap-10 w-70 md:w-80 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                <FaNodeJs color='#68a063' size={50}/>
                <span className='text-white'>
                    <h2>Backend Technology</h2>
                    {/* <p className='text-sm leading-tight font-thin'>Sept 2023 - Present</p> */}
                    <ul className='text-sm p-2'>
                        <li>- NodeJS</li>
                        <li>- ExpressJS</li>
                    </ul>
                </span>
             </div>
             <div className='flex gap-10 w-70 md:w-80 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                <LuDatabase color='gray' size={50}/>
                <span className='text-white'>
                    <h2>Databases</h2>
                    {/* <p className='text-sm leading-tight font-thin'>Sept 2023 - Present</p> */}
                    <ul className='text-sm p-2'>
                        <li>- MongoDB</li>
                        <li>- MySQL</li>
                    </ul>
                </span>
             </div>
            </div>
        </div>
      
    </div>
  )
}

export default Experience
