import React from 'react'
import { IoArrowForward } from 'react-icons/io5'
import aboutImg from '../../assets/new.jpg'


function About() {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-transparent shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div>
        <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
        <div className='md:flex flex-wrap flex-col md:flex-row gap-5 items-center'>
            <img src={aboutImg} alt="About" 
            className='md:h-80 mr-3 rounded-2xl' 
            loading='lazy' />

            <ul>
                <div className='flex gap-3 py-4'>
                    <IoArrowForward
                    size={30}
                    className='mt-1'
                    />
                    <span className='w-96'>
                        <h1 className='text-2xl font-semibold md:text-3xl mb-2 leading-normal'>Fronend Developer</h1>
                        
                        <p className='text-sm md:text-md leading-tight'>I can design Frontend with a keen eye for design and a strong foundation in modern web technologies. I specialize in building responsive, user-friendly websites and web applications using HTML, CSS, JavaScript, and the MERN stack. With expertise in React.js, I focus on creating seamless and dynamic user experiences.</p>
                    </span>
                </div>
                <div className='flex gap-3 py-4'>
                    <IoArrowForward
                    size={30}
                    className='mt-1'
                    />
                    <span className='w-96'>
                        <h1 className='text-2xl font-semibold md:text-3xl mb-2 leading-normal'>Backend Developer</h1>
                        
                        <p className='text-sm md:text-md leading-tight'>I'm a Backend Web Developer With expertise in Node.js, Express.js, MongoDB, and RESTful APIs, JWT Authentication, Socket IO. I specialize in creating robust backend systems that power seamless user experiences. </p>
                    </span>
                </div>
                {/* <div className='flex gap-3 py-4'>
                    <IoArrowForward
                    size={30}
                    className='mt-1'
                    />
                    <span className='w-96'>
                        <h1 className='text-2xl font-semibold md:text-3xl mb-2 leading-normal'>Database Engineer</h1>
                        
                        <p className='text-sm md:text-md leading-tight'></p>
                    </span>
                </div> */}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
