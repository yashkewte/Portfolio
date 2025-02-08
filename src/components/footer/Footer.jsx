import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {CiLinkedin} from 'react-icons/ci'
import {FaGithub} from 'react-icons/fa'

function Footer() {
  return (
    <div id='Contact' 
    className='flex gap-5 justify-around bg-[#465697] text-white p-10 md:p-12 items-center'
    >
      <div>
        <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
        <h3 className='text-sm md:text-2xl font-normal'>Feel free To reach out!</h3>
      </div>
      <ul className='text-small md:text-xl'>
        <a href="">
        <li className='flex gap-3 items-center'><MdOutlineEmail size={20}/>yashkewate33@gmail.com</li>
        </a>
        <a href="https://github.com/yashkewte">
        <li className='flex gap-3 items-center'><FaGithub size={20}/>github.com/yashkewte</li>
        </a>
        <a href="https://www.linkedin.com/in/yash-kewte">
        <li className='flex gap-3 items-center'><CiLinkedin size={20}/>linkedin.com/username</li>
        </a>
      </ul>
    </div>
  )
}

export default Footer
