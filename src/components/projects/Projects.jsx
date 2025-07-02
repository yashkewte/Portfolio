import React from 'react'
import ProjectCard from './ProjectCard'
import ExpenseTrackerImg from '../../assets/ExpenseTracker.png'
import PortfolioImg from '../../assets/portfolio.png'
import toast from 'react-hot-toast'

function Projects() {
  
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-12 px-8 flex flex-wrap gap-5 md:justify-evenly justify-center'>
        <ProjectCard 
          title='Expense Tracker'
          para="This is a Expense Tracker website that tracks your income and expenses. It is created in reactjs, nodejs, expressjs, mongoDB and some componenet library"
          codeLink='https://github.com/yashkewte/Expense-frontend.git'
          handleClick={()=>(toast.error('Demo link not available'))}
          prjectImg={ExpenseTrackerImg}
        />

        <ProjectCard 
          prjectImg={PortfolioImg}
          title='Portfolio'
          para='This is my personal portfolio website created in reactjs and tailwindcss'
          codeLink="https://github.com/yashkewte/Portfolio.git"
          handleClick={()=>(toast.success('You are live on this project'))}
          
        />

       
        
      </div>
    </div>
  )
}

export default Projects
