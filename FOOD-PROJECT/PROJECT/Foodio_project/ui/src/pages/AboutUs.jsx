import React from 'react'
import about from '../assets/images/ab.jpg'
import aboutus from '../assets/images/about.png'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
  const navigate=useNavigate();

  const toHome=()=>{
    navigate('/home')
  }
  return (
    <>
   <div style={{backgroundImage: `url(${about})`}} className='bg-cover h-[600px]'>
  
   <div className='bg-white flex justify-between '>
    <div>
      <img src={logo} alt="" className="size-20 flex justify-start mt-1" onClick={toHome} />

    </div>

    <div>
          <ul className="flex justify-end space-x-24 mt-8 px-4 text-l">
           
         
            <li>
              <Link to='/contact' className="hover:text-orange-500">
                <i className="fa-regular fa-address-book"></i>&nbsp;&nbsp;Contact
              </Link>
            </li>
            <li>
              <Link to="/signin" className="hover:text-orange-500">
              <i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Signin
              </Link>
            </li>
            </ul>
            </div>
            </div>

   </div>
   <div>
        <div className="p-4 border border-white bg-white shadow-lg m-12 text-center text-gray-400">
            <p className="text-xl hover:underline hover:cursor-pointer	">About Us</p>
        
        <div className="flex justify-between">
            <div className="ml-20"><img src={aboutus} alt="" className="size-[300px]"/></div>
            <div className=" w-[700px] p-12">
                <p className="text-black text-justify">Welcome to <span className="text-orange-500 font-bold">'foodio'</span>, where we make food delivery more convenient, fast, and enjoyable. Founded in <span className="text-orange-500 font-bold">2010</span>, our mission is to connect people with their favorite restaurants and meals,rightWe partner with top restaurants, cafes, and local eateries to offer a diverse menu that caters to all tastes and preferences. at their doorstep, all with just a few clicks.We partner with top restaurants, cafes, and local eateries to offer a diverse menu that caters to all tastes and preferences.</p>
            </div>
        </div>
    </div>
        
    </div>
    <hr className="my-4 mx-8 border-gray-300" />
    <div className="">
        <div className="p-4 border border-white bg-white shadow-lg m-12 text-center text-gray-400">
            <p className="text-xl hover:underline hover:cursor-pointer	">Our Mission</p>
        
        <div className="flex justify-between">
            
            <div className=" w-[700px] p-12">
                <p className="text-black text-justify">At <span className="text-orange-500">foodio</span>, we believe that everyone deserves access to great food, no matter where they are or what they crave. Whether you're in the mood for a quick snack, a hearty meal, or something unique, we’re here to satisfy your hunger—anytime, anywhere. We're not just delivering food; we’re delivering experiences, one meal at a time.Our easy-to-use platform lets you explore countless dining options, customize your orders, and track them in real time. From fresh, healthy choices to indulgent comfort foods, we’ve got you covered.</p>
            </div>
            <div className="ml-20"><img src={aboutus} alt="" className="size-[300px]"/></div>
        </div>
    </div>
    </div>
    <Footer />

    

    </>
  )
}

export default AboutUs
