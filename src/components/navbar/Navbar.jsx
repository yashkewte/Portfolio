import React, { useState } from 'react'
import {RiMenu2Line, RiCloseLine} from '@remixicon/react'
import { IoMdClose } from "react-icons/io";


function Navbar() {
    
    const [menu, setMenu] = useState(false)
    const [showMenu, setShowMenu] = useState(true)
  return (
    <nav className='flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20'>
        <a href="/">
        <span className='text-xl font-bold tracking-wide '>Yash Kewte</span>
        </a>
        <ul className={`${menu ? 'block' : 'hidden'} mx-8 py-2 mt-0 font-semibold md:mt-5 bg-transparent px-2 rounded-lg bo-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
            <a href="#About" className='outline-amber-400'>
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
        ) : (
        <IoMdClose size={30}
         className='md:hidden absolute right-10 top-6 transition-all duration-300'
         onClick={()=>{
            setMenu(!menu)
            setShowMenu(!showMenu)
        }}
        
        />
    )
        }
    </nav>

    

//   <nav class="bg-white border-gray-200 dark:bg-gray-900">
//   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//     <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        
//         <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Yash Kewte</span>
//     </a>
//     <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
//         <span class="sr-only">Open main menu</span>
//         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//         </svg>
//     </button>
//     <div class="hidden w-full md:block md:w-auto" id="navbar-default">
//       <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//         <li>
//           <a href="#About" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">About</a>
//         </li>
//         <li>
//           <a href="#Experience" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Experience</a>
//         </li>
//         <li>
//           <a href="#Projects" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
//         </li>
//         <li>
//           <a href="#Contact" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
//         </li>
        
//       </ul>
//     </div>
//   </div>
// </nav> 

  )
}

export default Navbar
