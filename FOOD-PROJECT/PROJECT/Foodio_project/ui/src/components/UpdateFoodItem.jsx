import React, { useState } from 'react';

const UpdateFoodItem = () => {
  const [ID, setID] = useState('');
  const [newDishName, setNewDishName] = useState('');
  const [newType, setNewType] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newRestaurant, setNewRestaurant] = useState('');
  const [newTime, setNewTime] = useState('');
  const [message, setMessage] = useState('');
  
  const handleUpdate = async (e) => {
    e.preventDefault();

    // Ensure all fields are filled in
    if (!ID || !newDishName || !newType || !newPrice || !newRestaurant || !newTime) {
      setMessage("All fields are required.");
      return;
    }

    try {
      const response = await fetch('/api/update', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ID,
          newDishName,
          newType,
          newPrice,
          newRestaurant,
          newTime,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`Item updated successfully: ${data.UpdateClass.dishName}`);
      } else {
        setMessage(data.message || "An error occurred.");
      }
    } catch (error) {
      setMessage('Failed to update item. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="py-10 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Update Food Item</h2>

      <form onSubmit={handleUpdate} className="space-y-4 max-w-lg mx-auto">
        <div>
          <label className="block text-sm font-semibold text-gray-700" htmlFor="ID">Food ID</label>
          <input
            id="ID"
            type="text"
            value={ID}
            onChange={(e) => setID(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700" htmlFor="newDishName">Dish Name</label>
          <input
            id="newDishName"
            type="text"
            value={newDishName}
            onChange={(e) => setNewDishName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700" htmlFor="newType">Type</label>
          <input
            id="newType"
            type="text"
            value={newType}
            onChange={(e) => setNewType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700" htmlFor="newPrice">Price</label>
          <input
            id="newPrice"
            type="number"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700" htmlFor="newRestaurant">Restaurant</label>
          <input
            id="newRestaurant"
            type="text"
            value={newRestaurant}
            onChange={(e) => setNewRestaurant(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700" htmlFor="newTime">Time</label>
          <input
            id="newTime"
            type="text"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 transition duration-200"
        >
          Update Item
        </button>
      </form>

      {message && (
        <div className={`mt-4 text-center text-lg ${message.startsWith('Item updated') ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default UpdateFoodItem;
