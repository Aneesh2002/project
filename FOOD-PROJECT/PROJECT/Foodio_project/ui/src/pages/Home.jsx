import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import back from '../assets/images/bg.jpg'
import Items from '../components/Items'
// import FoodItem from '../components/FoodCard'
// import FoodGrid from '../components/FoodGrid'
import FoodCard from '../components/FoodCard'

const Home = () => {
  return (
    <> <div style={{backgroundImage: `url(${back})`}} className='bg-cover h-[600px]'>
        <Navbar />
        
    
   <div className="mt-[300px] ml-[350px]">
    <p className=" text-3xl font-extrabold text-orange-500"><span className="text-black">"</span>People who love to eat </p>
         <p className="text-3xl font-extrabold ml-[150px]">are always the best people. <span className="text-orange-500">"</span> </p>
    <p className="ml-[400px]">- Julia Child</p>
   </div>

</div>
<Items />
<FoodCard />
<Footer />
    


    </>
    
  )
}

export default Home
