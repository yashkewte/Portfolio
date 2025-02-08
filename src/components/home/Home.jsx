import React from 'react'
import avatarImg from '../../assets/head.png'
import TextChange from '../TextChange'

function Home() {
  return (
    <div className='text-white flex w-full justify-between items-start p-8 md:p-15'>
      <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'><TextChange/></h1>
        <p className='text-sm md:text-2xl tracking-tight'>I’m a passionate Full-Stack MERN Web Developer with experience in building dynamic web applications. Proficient in MongoDB, Express.js, React.js, and Node.js, I specialize in creating efficient backend and responsive frontend interfaces. With a strong knowledge in RESTful APIs, database management, authentication, and state management (Redux/Context API).</p>
        <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg bg-yellow-500 rounded-3xl md:py-2 md:px-4 hover:opacity-80 duration-300 hover:scale-105 font-semibold'>Contact Me</button>
      </div>
      <div className=''>
        <img id='homeImg' src={avatarImg} alt="avatar"
        className='md:h-100 relative md:top-0 top-15'
        
        />
      </div>
    </div>
  )
}

export default Home
