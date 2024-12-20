import React, { useState } from 'react';
import logo from '../assets/images/whitelogo.png';
import AddFood from '../components/AddFood';
import FoodList from '../components/FoodList'; // Import FoodList component

const AdminDash = () => {
  const [showAddFoodForm, setShowAddFoodForm] = useState(false);
  const [showFoodList, setShowFoodList] = useState(false); // New state to control FoodList visibility

  const handleAddFoodClick = () => {
    setShowAddFoodForm(true);
    setShowFoodList(false); // Hide FoodList when AddFood is clicked
  };

  const handleFoodListClick = () => {
    setShowFoodList(true);
    setShowAddFoodForm(false); // Hide AddFood when FoodList is clicked
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 h-full bg-orange-500 text-white p-4 shadow-lg">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Logo" className="size-20" />
          </div>
          <ul>
            <li className="p-4 text-xl font-bold">Dashboard</li>
            <a href="#addfood">
              <li
                onClick={handleAddFoodClick}
                className="m-3 p-3 bg-slate-200 text-black rounded-full hover:bg-white transition duration-300 cursor-pointer">
                Add Food
              </li>
            </a>
            <a href="#foodlist">
              <li
                onClick={handleFoodListClick}
                className="m-3 p-3 bg-slate-200 text-black rounded-full hover:bg-white transition duration-300 cursor-pointer">
                Food Details
              </li>
            </a>
            <li className="m-3 p-3 bg-slate-200 text-black rounded-full hover:bg-white transition duration-300">
              Order Details
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Welcome to Admin Dashboard</h2>
            </div>
            <div>
              <a href="#" className="border border-orange-500 rounded-full p-3">
                <i className="fa-solid fa-user text-xl text-orange-500"></i>
              </a>
            </div>
          </div>

          {/* Conditionally render Add Food Form */}
          {showAddFoodForm && <AddFood />}

          {/* Conditionally render Food List */}
          {showFoodList && <FoodList />}
        </div>
      </div>
    </>
  );
};

export default AdminDash;
