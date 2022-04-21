import { useState } from 'react';
import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';

import logo from '../../images/logo.png';

const NavbarItems = ({ tittle, classProps}) => {  // classProps is a prop that is passed from the parent component
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>  
            <a href='#' className='text-white text-lg hover:text-gray-600'>{tittle}</a>
        </li>
    );
}

const Navbar = () => {

   const [toggleMenu, setToggleMenu] = useState(false);  // toggleMenu is a state that is used to toggle the menu

 return (
     <nav className='w-full flex md:justify-center justify-between items-center p-4'>
         <div className='md:flex-[0.5] flex-initial justify-center items-center'>
          <img src={logo} alt='logo' className='w-32 cursor-pointer' />
         </div>
         <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-init'>
            {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
                <NavbarItems key={item + index} tittle={item} />  // key is used to identify the element in the array

            ))}
            <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                Login
                </li>  {/* this is a custom class that is used to create a border between the navbar items */}
         </ul>
         <div className='flex relative'>
                {toggleMenu
                ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
                } 
                {toggleMenu && (
                    <ul  
                        className='z-10 fixed top-0 -right-2 p-4 w-[70vw] h-screen shadow-2x1 md:hidden list-none
                        flex flex-col justify-start items-end rounded-md- blue-glassmorphism text-white animate-slide-in  
                        '  
                    >  {/* this is a custom class that is used to create a border between the navbar items */}
                        <li className='text-x1 w-full my-2'>
                            <AiOutlineClose onClick={() => setToggleMenu(false)} className="text-white md:hidden cursor-pointer" />  {/* this is a custom class that is used to create a border between the navbar items */}
                        </li>
                        {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (  // this is a custom class that is used to create a border between the navbar items
                         <NavbarItems key={item + index} tittle={item} classProps="z-10 my-2 text-lg text-white" />  // key is used to identify the element in the array
                         ))}
                    </ul>
                )}
         </div>
     </nav>
 );
}

export default Navbar;