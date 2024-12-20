import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddFood = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    ID: '',
    DishName: '',
    Type: '',
    Price: '',
    Restaurant: '',
    Quantity: ''
  });
  const navigate=useNavigate()

  // State to handle loading, success, and error messages
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/addFood', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include', // Include credentials for authentication (cookies, sessions)
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage(data.message);  // Success message
        
      } else {
        setMessage(data.message);  // Error message
      }
    } catch (error) {
      setMessage('Error while adding food');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-semibold text-gray-800">Add Food</h3>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="ID" className="block text-sm font-medium text-gray-700">Food ID</label>
          <input
            type="text"
            id="ID"
            value={formData.ID}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            placeholder="Enter food ID"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="DishName" className="block text-sm font-medium text-gray-700">Food Name</label>
          <input
            type="text"
            id="DishName"
            value={formData.DishName}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            placeholder="Enter food name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Type" className="block text-sm font-medium text-gray-700">Type</label>
          <input
            type="text"
            id="Type"
            value={formData.Type}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            placeholder="Enter food type"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            id="Price"
            value={formData.Price}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            placeholder="Enter price"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Restaurant" className="block text-sm font-medium text-gray-700">Restaurant Name</label>
          <input
            type="text"
            id="Restaurant"
            value={formData.Restaurant}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            placeholder="Enter restaurant name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
          <input
            type="number"
            id="Quantity"
            value={formData.Quantity}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            placeholder="Enter quantity"
            required
          />
        </div>

        {message && (
          <div className="mb-4">
            <p className={`text-sm ${message.includes('Successfully') ? 'text-green-500' : 'text-red-500'}`}>
              {message}
            </p>
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition duration-300"
            disabled={loading}
          >
            {loading ? 'Adding Food...' : 'Add Food'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
