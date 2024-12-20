import React from 'react'
import Footer from '../components/Footer'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
<>
<div className='bg-white flex justify-between '>
    <div>
      <img src={logo} alt="" className="size-20 flex justify-start mt-1" />

    </div>

    <div>
          <ul className="flex justify-end space-x-24 mt-8 px-4 text-l">
           
         
            <li>
              <Link to='/about' className="hover:text-orange-500">
                <i className="fa-regular fa-address-book"></i>&nbsp;&nbsp;AboutUs
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

            <form className='my-20'>
                <div className="ml-[450px] border bg-transparent w-[450px] p-6 mt-10 rounded-xl shadow-xl">
                    <h2 className="text-black mt-2 font-bold text-4xl ml-24 ">Contact Us</h2>
                    <div>
                        <label for="first_name" className=" mb-2 text-sm font-medium text-gray-900 "> name</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 " placeholder="name" required />
                    </div> 
                    <div>
                        <label for="email" className=" mb-2 text-sm font-medium text-gray-900 ">email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 " placeholder="email" required />
                    </div> 
                    <div>
                        <div>
                            <label for="phone" className=" mb-2 text-sm font-medium text-gray-900">Phone number</label>
                            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-blue-500 block w-[400px] p-2" placeholder="123-45-678" required />
                        </div>
                    </div>
                    <div>
                        <label for="message" className=" mb-2 text-sm font-medium text-gray-900">short note</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-[400px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder=" enter your address"></textarea>
                    </div>                   
                   


                    <button className="text-white bg-orange-500 w-[400px] h-[50px] mt-8 rounded-lg shadow-lg">Submit</button>
    
                </div>
            
            

            </form>
            <Footer />
        
      

</>  )
}

export default Contact