import React from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'
import Index from './pages/Index'
import Login from './pages/Login'
import SignupPage from './pages/SignIn'
import AdminDash from './Adminpages/AdminDash'
import Home from './pages/Home'
// import Search from './components/Search'
import Find from './pages/Find'
import AboutUs from './pages/AboutUs'
import Offer from './pages/Offer'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import CheckOut from './pages/CheckOut'
import TrackOrder from './pages/TrackOrder'


const App = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Index />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signin' element={<SignupPage />}></Route>
      <Route path='/admindash' element={<AdminDash />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/search' element={<Find />}></Route>
      <Route path='/about' element={<AboutUs />}></Route>
      <Route path='/offer' element={<Offer />}></Route>
      {/* <Route path="/" element={<FoodItem />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/checkout' element={<CheckOut />}></Route>
        <Route path='/track' element={<TrackOrder />}></Route>

      </>
    )
  )
  return (
    <>
    <RouterProvider router={router} />
    </>
   
     
    
  )
}

export default App
