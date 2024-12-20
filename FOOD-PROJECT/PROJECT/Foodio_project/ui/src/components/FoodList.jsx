import React, { useState, useEffect } from 'react';

const FoodList = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [message, setMessage] = useState('');

  // Fetch food items on component mount
  useEffect(() => {
    fetch('/api/items')
      .then(response => response.json())
      .then(data => {
        setFoodItems(data);
      })
      .catch(error => {
        console.error('Error fetching food items:', error);
      });
  }, []);

  // Handle delete food item
  const handleDelete = (foodId) => {
    fetch(`/api/delete/${foodId}`, {
        method: 'DELETE',  // Use DELETE method
        headers: {
            'Content-Type': 'application/json',
        },
        // Optional: Add authentication token in headers if needed
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Item deleted successfully') {
            setFoodItems(foodItems.filter(item => item.iD !== foodId));  // Update UI
            setMessage('Item deleted successfully');
        } else {
            setMessage(data.message || 'Error deleting item');
        }
    })
    .catch(error => {
        console.error('Error deleting item:', error);
        setMessage('Error deleting item');
    });
};
  // Handle update food item
  const handleUpdate = (foodId) => {
    // Redirect or open a form for updating item (For now, just show a message)
    alert(`Update functionality for food ID: ${foodId}`);
  };

  return (
    <div className="py-10 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Food Menu</h2>
      
      {message && <div className="mb-4 text-center text-lg text-red-500">{message}</div>}
      
      {foodItems.length === 0 ? (
        <p className="text-gray-600 text-center">No food items available</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-orange-500 text-left">
            <th className="border border-gray-300 px-4 py-2">Food ID</th>
              <th className="border border-gray-300 px-4 py-2">Dish Name</th>
              <th className="border border-gray-300 px-4 py-2">Type</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Restaurant</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {foodItems.map(item => (
              <tr key={item.foodId} className="hover:bg-gray-100">
             <td className="border border-gray-300 px-4 py-2">{item.iD}</td>
                <td className="border border-gray-300 px-4 py-2">{item.dishName}</td>
                <td className="border border-gray-300 px-4 py-2">{item.type}</td>
                <td className="border border-gray-300 px-4 py-2">Rs{item.price}</td>
                <td className="border border-gray-300 px-4 py-2">{item.restuarant}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleUpdate(item.foodId)}
                    className="text-blue-500 font-semibold hover:text-blue-700 mr-4"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(item.iD)}
                    className="text-red-500 font-semibold hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FoodList;
