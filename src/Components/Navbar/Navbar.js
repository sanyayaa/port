import React from 'react'
import {Link} from 'react-router-dom';
export default function Navbar() {
  return (
    <>
      {/* <nav className='py-5 bg-white sticky top-0 border-b border-gray-100'>
        <div className='container md:px-12 md:flex md:items-center md:justify-between'>
          <div className='flex items-center justify-between'>
            <a href='#' className='flex items-center'>
              <img src="" alt="logo" className="h-10 mr-3" />
              <span className='text-2xl text-gray-900 font-sans font-bold'> Growlight</span>
            </a>
            <span className='block mx-2 text-3xl bg-gray-100 p-2 rounded-lg md:hidden'> 
              <svg name="menu" onClick="Menu(this)" xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width="1.7" stroke="currentColor" className='w-6 h-6'>
                <path stroke-linecap="round" stroke-linejoin="round" d=""/>
              </svg>
            </span>
          </div>

          <ul className='p-5 z-10 absolute bg-white/80 backdrop-blur w-full left-0 py-4 opacity-0 top-[-400px] transition-all ease-in duration-500 md:p-0 md:flex md:items-center md:space-x-8 md:static md:w-auto md:opacity-100'>
            <li className='md:my-0'>
              <a href='#home' className='font-medium duration-500 text-gray-900 hover:text-indigo-600'>Home</a>
            </li>
            <li className='my-6 md:my-0'>
              <a href='#' className='font-medium duration-500 text-gray-900 hover:text-indigo-600'>About</a>
            </li>
              <a href='#' className='font-medium duration-500 text-gray-900 hover:text-indigo-600'>Books</a>
            <li className='my-6 md:my-0'>
              <a href='#' className='font-medium duration-500 text-gray-900 hover:text-indigo-600'>Research Paper</a>
            </li> 
            <a href="#">
              <button type='button' className='w-full text-white bg-indigo-600 font-medium rounded-lg px-3.5 py-3 text-center hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out'>Contact Us</button>
            </a>         
          </ul>
        </div>
      </nav> */}

      <nav class="bg-white border-gray-200 light:bg-gray-900 py-5">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between m-auto my-7">
        <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
            <span class="self-center text-3xl font-semibold whitespace-nowrap light:text-white">Flowbite</span>
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800">Contact Me</button>
            <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 light:text-gray-400 light:hover:bg-gray-700 light:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul class="flex flex-col font-medium p-4 text-2xl md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white light:bg-gray-800 md:light:bg-gray-900 light:border-gray-700">
            <li>
              <Link to="/home" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:light:text-blue-500" aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="/blog" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:light:hover:text-blue-500 light:text-white light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700">Blog</Link>
            </li>
            <li>
              <Link to="/book" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:light:hover:text-blue-500 light:text-white light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700">Books</Link>
            </li>
            <li>
              <Link to="/papers" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:light:hover:text-blue-500 light:text-white light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700">Research Papers</Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </>
  )
}

// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <body className="font-Poppins bg-gradient-to-t from-#fbc2eb to-#a6c1ee font-bold my-5 mx-12 text-2xl">
//       <header className="bg-white px-12">
//         <nav className="flex justify-between items-center mx-4 px-3">
//           <div>
//             <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..." />
//           </div>
//           <div
//             className={`nav-links duration-500 md:static absolute bg-white sm: md:min-h-fit min-h-60vh left-0 top-${isMenuOpen ? '9%' : '-100%'} md:w-auto w-full flex items-center px-5`}
//           >
//             <ul className="flex md:flex-row flex-col md:items-center md:gap-4vw gap-8">
//               <li>
//                 <a className="hover:text-gray-500" href="#">
//                   About Me
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-500" href="#">
//                   Books
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-500" href="#">
//                   Opinion 
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-500" href="#">
//                   Research Papers
//                 </a>
//               </li>
              
//             </ul>
//           </div>
//           <div className="flex items-center gap-6">
//             <button className="bg-#a6c1ee text-black px-5 py-2 rounded-full hover:bg-#87acec">Sign in</button>
//             <ion-icon onClick={toggleMenu} name={isMenuOpen ? 'close' : 'menu'} className="text-3xl cursor-pointer md:hidden"></ion-icon>
//           </div>
//         </nav>
//       </header>
//     </body>
//   );
// };

// export default Navbar;

// ----------------------------------------------------------------

// import React from 'react'
// import './Navbar.css';
// export default function Navbar() {
//   return (
//     <div>
//         <header className=''>NAV
//             <image className="logo" src="" alt = "logo" />
//             <nav>
//                 <ul className="nav_link">
//                     <li><a href = "#" >Services </a></li>
//                     <li><a href = "#" >Projects </a></li>
//                     <li><a href = "#" >About </a></li>
//                 </ul>
//             </nav>
//             <a className="cta" href="#"><button>Contact</button></a>
//         </header>
//     </div>
//   )
// }
