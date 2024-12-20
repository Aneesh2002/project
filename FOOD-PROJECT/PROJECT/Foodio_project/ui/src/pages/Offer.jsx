import React from 'react'
import Navbar from '../components/Navbar'
import offer from '../assets/images/BIRIYANI.png'

const Offer = () => {
  return (
    <>
    <Navbar />
    <div className="flex p-40 space-x-20">
            <div>
                <img src={offer} alt=""/>

            </div>
            <div className="">
                <p className="font-extrabold text-5xl text-white">Flat <span className="text-green-500 text-7xl">Attractive</span> OFF</p>
                <p className="font-extrabold text-2xl text-white ml-20 p-4">On <span className="text-orange-500">Foodio</span></p>
                <a href="/user/order.html"><button className="w-[200px] h-[50px] bg-orange-500 p-2 rounded-full ml-14">Order Now</button></a>
                <p className="text-white font-bold text-xl p-4">grab your favourites from here!</p>
            </div>
          </div>
    </>
  )
}

export default Offer