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
 return (
     <nav className='w-full flex md:justify-center justify-between items-center p-4'>
         <div className='md:flex-[0.5] flex-initial justify-center items-center'>
          <img src={logo} alt='logo' className='w-32 cursor-pointer' />
         </div>
         <ul className='text-white md:flex hiddent list-none flex-row justify-between items-center flex-init'>
            {['Market,', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
                <NavbarItems key={item + index} tittle={item} />  // key is used to identify the element in the array

            ))}
            <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                Login
                </li>  {/* this is a custom class that is used to create a border between the navbar items */}
         </ul>
     </nav>
 );
}

export default Navbar;