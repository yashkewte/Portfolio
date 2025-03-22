import React from 'react'
import cardImg from "../../assets/pexels-pixabay-147411.jpg"
import toast from 'react-hot-toast'

function ProjectCard({title, para, codeLink, demoLink, handleClick}) {
  return (
    <div className='p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl ' >
      <img src={cardImg} alt="Card" 
      className='p-3 rounded-3xl drop-shadow-lg'
      />
      <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>
        {title}
      </h3>
      <p className='px-4 text-sm md:text-md leading-tight py-2'>{para}</p>
      <div className='mt-2 p-2 md:p-4 flex gap-2 md:gap-4 '>

        <a href={demoLink}><button
                              onClick={handleClick} 
                              className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-125 font-semibold rounded-3xl bg-[#465697]'
                            >Demo</button></a>

        <a href={codeLink}><button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-125 font-semibold rounded-3xl bg-[#465697]'>Code</button></a>
      </div>
    </div>
  )
}

export default ProjectCard
