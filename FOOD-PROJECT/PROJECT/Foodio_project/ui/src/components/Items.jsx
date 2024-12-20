import React from 'react'
import biriyani from '../assets/images/BIRIYANI.png'
import meals from '../assets/images/meals.png'
import ice from '../assets/images/icecreame.png'
import alfam from '../assets/images/alfam.png'
import pureveg from '../assets/images/veg.png'
import bakes from '../assets/images/puffs.png'
import juice from '../assets/images/juice.png'

const Items = () => {
  return (
    <>
    <div className="bg-orange-500 mt-12 shadow-lg">
        <p className="font-extrabold text-white text-2xl ml-8 py-8">what's on your Mind ?</p>
        <div className="flex flex-row px-4 space-x-12 mt-8 overflow-auto hide-scrollbar">
            <div className="w-[200px] h-[250px]">
                <a href="/user/order.html"><img src={biriyani} className="w-[200PX] h-[150px] ml-5" alt=""/></a>
                <div className="mr-14">
                    <p className="mt-4  ml-20 font-bold">Biriyani</p>
                  </div>
            </div>
            <div className="w-[200px] h-[250px]">
                <a href="/user/order.html"><img src={meals} className="w-[300PX] h-[150px] ml-5 " alt=""/></a>
                <div className="mr-14">
                  <p className="mt-4  ml-20 font-bold">Meals</p>
                </div>
            </div>
            <div className="w-[200px] h-[250px]">
                <a href="/user/order.html"><img src={ice} className="w-[200PX] h-[150px] ml-5" alt=""/></a>
                <div className="mr-14 flex">
                   <p className="mt-4 ml-20 font-bold ">Icecream</p>
                </div>
            </div>
            <div  className="w-[200px] h-[250px]">
                <a href="/user/order.html"><img src={alfam} className="w-[200PX] h-[150px] ml-5" alt=""/></a>
                <div className="mr-14 flex">
                    <p className="mt-4 ml-20 font-bold ">Alfam</p>
                 </div>
            </div>
            <div  className="w-[200px] h-[250px]">
                <a href="/user/order.html"><img src={juice} className="w-[200PX] h-[150px] ml-5" alt=""/></a>
                <div className="mr-14 flex">
                    <p className="mt-4 ml-20 font-bold ">Juices</p>
                 </div>
            </div>
            <div  className="w-[200px] h-[250px]">
                <a href="/user/order.html"><img src={pureveg} className="w-[200PX] h-[150px] ml-5" alt=""/></a>
                <div className="mr-14 flex">
                    <p className="mt-4 ml-20 font-bold ">Pureveg</p>
                 </div>
            </div>
            <div className="w-[200px] h-[250px]">
                <a href="/user/order.html"><img src={bakes} className="w-[200PX] h-[150px] ml-5" alt=""/></a>
                <div className="mr-14 flex">
                    <p className="mt-4 ml-20 font-bold ">Bakes</p>
                 </div>
            </div>
            <div className="w-[200px] h-[250px]">
                <a href="/user/order.html"><img src="../images/BIRIYANI.png" className="w-[200PX] h-[150px] ml-5" alt=""/></a>
                <p className="mt-4 ml-20 font-bold">BIRIYANI</p>
            </div>
            <div className="w-[200px] h-[250px]">
                <a href="/user/order.html"><img src="../images/BIRIYANI.png" className="w-[200PX] h-[150px] ml-5" alt=""/></a>
                <div className="mr-14 flex">
                    <p className="mt-4 ml-20 font-bold ">Icecream</p>
                 </div>
            </div>
            <div className="w-[200px] h-[250px]">
                <a href="/user/order.html"><img src="../images/BIRIYANI.png" className="w-[200PX] h-[150px] ml-5" alt=""/></a>
                <div className="mr-14 flex">
                    <p className="mt-4 ml-20 font-bold ">Icecream</p>
                 </div>
            </div>
            <div className="w-[200px] h-[250px]">
                <a href="/user/order.html"><img src="../images/BIRIYANI.png" className="w-[200PX] h-[150px] ml-5" alt=""/></a>
                <div className="mr-14 flex">
                    <p className="mt-4 ml-20 font-bold ">Icecream</p>
                 </div>
            </div>
            <div className="w-[200px] h-[250px]">
                <a href="/user/order.html"><img src="../images/BIRIYANI.png" className="w-[200PX] h-[150px] ml-5" alt=""/></a>
                <div className="mr-14 flex">
                    <p className="mt-4 ml-20 font-bold ">Icecream</p>
                 </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Items
