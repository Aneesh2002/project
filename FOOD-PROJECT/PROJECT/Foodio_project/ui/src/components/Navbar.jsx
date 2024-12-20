

import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate=useNavigate()

  const toggleProfileMenu = () => {
    setShowProfileMenu((prev) => !prev);
  };

  const logOut = async () => {
    try {
      const response = await fetch('/api/logout');
      console.log(response.message);

      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error.response);
      alert('Failed to log out. Please try again.');
    }
  };

  const toHome=()=>{
    navigate('/home')
  }
   
  const trackOrder=()=>{
    navigate('/track')
  }




 

  return (
    <>
      <nav className="flex justify-between bg-white text-black font-serif py-1">
        <div>
          <img className="size-20 flex justify-start mt-1" src={logo} alt="Logo" onClick={toHome} />
        </div>

        <div>
          <ul className="flex justify-end space-x-24 mt-8 px-4 text-l">
            <li>
              <Link to="/about" className="hover:text-orange-500">
                <i className="fa-solid fa-tag"></i>&nbsp;&nbsp;About
              </Link>
            </li>
            <li>
              <Link to='/search' className="hover:text-orange-500">
                <i className="fa-solid fa-magnifying-glass"></i>&nbsp;&nbsp;Search
              </Link>
            </li>
            <li>
              <Link to='/contact' className="hover:text-orange-500">
                <i className="fa-regular fa-address-book"></i>&nbsp;&nbsp;Contact
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-orange-500">
              <i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Cart
              </Link>
            </li>
            <li>
              <button
                onClick={toggleProfileMenu}
                className="hover:text-orange-500 focus:outline-none"
              >
                <i className="fa-solid fa-user"></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {showProfileMenu && (
        <div className="absolute top-16 right-4 w-[200px] h-[150px] bg-white rounded shadow-lg"
          onClick={() => setShowProfileMenu(false)}
        >
          <div className='grid text-white '>
          <button className='p-4 m-2 bg-orange-400 w-[180px] shadow-md hover:bg-white hover:text-orange-400'>Profile</button>
          <button className='p-4 m-2 bg-orange-400 w-[180px] shadow-md hover:bg-white hover:text-orange-400' onClick={trackOrder}>TrackOrder</button>

          <button className='p-4 m-2 bg-orange-400 w-[180px] shadow-md hover:bg-white hover:text-orange-400' onClick={logOut}>logout</button>
          
          </div>
         
        </div>
      )}
    </>
  );
};

export default Navbar;

