import React, { useState, useEffect } from 'react';

const FoodCard = () => {
  const [foods, setFoods] = useState([]);
  const userId = 'user1'; // Example user ID

  useEffect(() => {
    // Fetch food items from the backend using fetch
    fetch('/api/items')
      .then(response => response.json())
      .then(data => {
        setFoods(data || []);
      })
      .catch(error => {
        console.error('Error fetching food items:', error);
      });
  }, []);

  const addToCart = async (foodId, dishName, price) => {

    const newData = { userId, foodId, dishName, price }
    console.log(newData);

    const resp = await fetch('/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
    if(resp.ok){
      alert(`${dishName} item added to cart`)

    }else{
      alert('error to add item')
    }

  };

  return (
    <div className="py-10 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Food Menu</h2>
      {foods.length === 0 ? (
        <p className="text-gray-600 text-center">No food items available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {foods.map(food => (
            <div
              key={food.foodId}
              className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* <img
                src={food.imageUrl || 'https://via.placeholder.com/200'}
                alt={food.dishName}
                className="w-full h-56 object-cover"
              /> */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{food.dishName}</h3>
                <p className="text-gray-600 mb-4">Price: ₹{food.price}</p>
                <button
                  onClick={() => addToCart(food.iD, food.dishName, food.price)}
                  className="w-full py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 transition duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodCard;
