import React from 'react'
// import cardImg from '../../assets/new-ph.jpg'
import toast from 'react-hot-toast'

function ProjectCard({title,prjectImg, para, codeLink, demoLink, handleClick}) {
  return (
    <div className='p-3 md:p-6 flex flex-col w-90  bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl ' >
      <div>
      <img src={prjectImg} alt="Card" 
      className='p-3 rounded-3xl drop-shadow-lg'
      />
      <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>
        {title}
      </h3>
      
      <p className='px-4 text-sm md:text-md leading-tight py-2'>{para}</p>
      </div>
      <div className=' mb-auto p-2 md:p-4 flex gap-2 md:gap-4'>

        <a href={demoLink}><button
                              onClick={handleClick} 
                              className='md:mb-2 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-125 font-semibold rounded-3xl bg-[#465697]'
                            >Demo</button></a>

        <a href={codeLink}><button tabIndex={1} className='md:mb-2 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-125 font-semibold rounded-3xl bg-[#465697]'>Code</button></a>
      </div>
    </div>
  )
}

export default ProjectCard
