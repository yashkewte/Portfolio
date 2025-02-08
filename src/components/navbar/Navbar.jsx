import React, { useState } from 'react'
import {RiMenu2Line, RiCloseLine} from '@remixicon/react'

function Navbar() {
    const [menu, setMenu] = useState(false)
    const [showMenu, setShowMenu] = useState(true)
  return (
    <nav className='flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20'>
        <a href="/">
        <span className='text-xl font-bold tracking-wide '>Yash Kewte</span>
        </a>
        <ul className={`${menu ? 'block' : 'hidden'} mx-8 py-2 mt-0 font-semibold md:mt-5 bg-transparent px-2 rounded-lg bo-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
            <a href="#About">
            <li className={`text-md transition-all duration-300 p-1 md:p-0 hover:opacity-60 hover:scale-130`}>About</li>
            </a>

            <a href="#Experience">
            <li className='text-md transition-all duration-300 p-1 md:p-0 hover:opacity-60 hover:scale-130'>Skills</li>
            </a>

            <a href="#Projects">
            <li className='text-md transition-all duration-300 p-1 md:p-0 hover:opacity-60 hover:scale-130'>Projects</li>
            </a>

            <a href="#Contact">
            <li className='text-md transition-all duration-300 p-1 md:p-0 hover:opacity-60 hover:scale-130'>Contact</li>

            </a>
        </ul>
        {setMenu ? (
            <RiMenu2Line size={30} 
            className='md:hidden absolute right-10 top-6 transition-all duration-300'
            onClick={()=>{
                setMenu(!menu)
                setShowMenu(!showMenu)
            }}/>
        ) : 
        <RiCloseLine size={30}
        className='md:hidden absolute right-10 top-6 transition-all duration-300'
        onClick={()=>{
            setMenu(!menu)
            setShowMenu(!showMenu)
        }}
        />
        }
    </nav>
  )
}

export default Navbar
