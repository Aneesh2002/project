import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className=" shadow bg-slate-200">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            
                <img src={logo} className="size-20" alt="" />
                
            
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="/user/contact.html" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Foodio<sup>TM</sup></a>. All Rights Reserved.</span>
    </div>
</footer>
</>
  )
}

export default Footer
