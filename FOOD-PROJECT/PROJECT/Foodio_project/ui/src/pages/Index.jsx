import React from 'react'
import { Link } from 'react-router-dom'
import index from '../assets/images/index.jpg'
import logo from '../assets/images/logo.png'
import Footer from '../components/Footer'


const Index = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${index})` }} className='bg-cover h-[600px] mb-'>

        <div className='bg-white flex justify-between'>
          <div>
            <img src={logo} className="size-20 mt-1" />
          </div>
          <div >
            <ul className=' space-x-20 p-2 font-bold text-orange flex justify-between mt-4'>
              <li><Link to="/login">LOGIN</Link></li>
              <li><Link to="/signin">REGISTER</Link></li>
              {/* <li><Link to="/about">About</Link></li> */}
              {/* <li><Link to="/contact">contact</Link></li> */}
              {/* <li><Link to="/adminDash">admin</Link></li> */}


            </ul>
          </div>
        </div>
        {/* get started button */}
        <div className='ml-[500px] mt-[300px]'>
          <button className='bg-orange-500 text-white border-2 border-black rounded-lg p-4 w-[200px]'>GET STARTED</button>

        </div>
      </div>

      <Footer />



    </>
  )
}

export default Index
