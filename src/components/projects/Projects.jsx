import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-12 px-8 flex flex-wrap gap-5'>
        <ProjectCard title='Blog Site' para='this is a bloging website created in reactjs and some componenet library'/>

        <ProjectCard title='Blog Site' para='this is a bloging website created in reactjs and some componenet library'/>

        <ProjectCard title='Blog Site' para='this is a bloging website created in reactjs and some componenet library'/>
        
      </div>
    </div>
  )
}

export default Projects
