
import { FaCss3, FaHtml5, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'
import { DiMysql } from 'react-icons/di'
import { SiMongodb } from 'react-icons/si'
import { LuDatabase } from 'react-icons/lu'


function Experience() {
    return (
        <div id='Experience' className='p-10 md:p-24'>
            <h1 className='text-2xl md:text-4xl text-white font-bold'>Skills</h1>
            <div className='flex flex-wrap items-center justify-around'>
                <div className='flex flex-wrap md:w-full justify-center gap-8 md:p-12 py-10'>
                    <div className='group hover:scale-110 transition-all duration-300 cursor-pointer'>
                        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl group-hover:shadow-lg group-hover:shadow-orange-500/20'>
                            <FaHtml5 color='#E34F26' size={50} />
                        </span>
                        <p className='text-white font-bold text-center mt-2'>HTML5</p>
                    </div>

                    <div className='group hover:scale-110 transition-all duration-300 cursor-pointer'>
                        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl group-hover:shadow-lg group-hover:shadow-blue-500/20'>
                            <FaCss3 color='#1572b6' size={50} />
                        </span>
                        <p className='text-white font-bold text-center mt-2'>CSS3</p>
                    </div>

                    <div className='group hover:scale-110 transition-all duration-300 cursor-pointer'>
                        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl group-hover:shadow-lg group-hover:shadow-yellow-500/20'>
                            <FaJs color='yellow' size={50} />
                        </span>
                        <p className='text-white font-bold text-center mt-2'>JavaScript</p>
                    </div>

                    <div className='group hover:scale-110 transition-all duration-300 cursor-pointer'>
                        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl group-hover:shadow-lg group-hover:shadow-cyan-500/20'>
                            <FaReact color='#61DAFB' size={50} />
                        </span>
                        <p className='text-white font-bold text-center mt-2'>ReactJS</p>
                    </div>

                    <div className='group hover:scale-110 transition-all duration-300 cursor-pointer'>
                        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl group-hover:shadow-lg group-hover:shadow-green-500/20'>
                            <FaNodeJs color='#68a063' size={50} />
                        </span>
                        <p className='text-white font-bold text-center mt-2'>NodeJS</p>
                    </div>

                    <div className='group hover:scale-110 transition-all duration-300 cursor-pointer'>
                        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl group-hover:shadow-lg group-hover:shadow-green-500/20'>
                            <SiMongodb color='#4DB33D' size={50} />
                        </span>
                        <p className='text-white font-bold text-center mt-2'>MongoDB</p>
                    </div>

                    <div className='group hover:scale-110 transition-all duration-300 cursor-pointer'>
                        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl group-hover:shadow-lg group-hover:shadow-blue-500/20'>
                            <DiMysql color='#00758F' size={50} />
                        </span>
                        <p className='text-white font-bold text-center mt-2'>MySQL</p>
                    </div>

                </div>

                <div className='flex flex-wrap gap-5 mt-5 md:mt-20'>
                    <div className='group flex gap-10 w-70 md:w-80 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-opacity-60'>
                        <FaHtml5 color='#E34F26' size={50} className="group-hover:scale-110 transition-all duration-300" />
                        <span className='text-white group-hover:text-orange-500 transition-all duration-300'>
                            <h2 className="font-semibold">Frontend Technology</h2>
                            <ul className='text-sm p-2'>
                                <li>- HTML, CSS,</li>
                                <li>- TailwindCss, ReactJS</li>
                            </ul>
                        </span>
                    </div>
                    <div className='transform-gpu group flex gap-10 w-70 md:w-80 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-opacity-60 hover:shadow-lg hover:shadow-green-500/20'>
                        <div className="transform-gpu group-hover:scale-110 transition-all duration-300">
                            <FaNodeJs color='#68a063' size={50} />
                        </div>
                        <span className='text-white group-hover:text-green-500 transition-all duration-300'>
                            <h2 className="font-semibold">Backend Technology</h2>
                            <ul className='text-sm p-2'>
                                <li>- NodeJS</li>
                                <li>- ExpressJS</li>
                            </ul>
                        </span>
                    </div>
                    <div className='group flex gap-10 w-70 md:w-80 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-opacity-60'>
                        <LuDatabase color='gray' size={50} className="group-hover:scale-110 transition-all duration-300" />
                        <span className='text-white group-hover:text-blue-500 transition-all duration-300'>
                            <h2 className="font-semibold">Databases</h2>
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
