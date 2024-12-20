import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const userId = 'user1'; // Example user ID
  const navigate = useNavigate();

  // Fetch cart data on component mount
  useEffect(() => {
    fetch(`/api/${userId}`)
      .then(response => response.json())
      .then(data => {
        setCart(data.items || []);
      })
      .catch(error => {
        console.error('Error fetching cart:', error);
      });
  }, []);

  // Remove an item from the cart
  const removeItem = (foodId) => {
    fetch('/api/remove', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, foodId }),
    })
      .then(response => response.json())
      .then(data => {
        setCart(data.items || []);
      })
      .catch(error => {
        console.error('Error removing item:', error);
      });
  };

  // Navigate to the checkout page
  const proceedToCheckout = () => {
    navigate('/checkout', { state: { cart } });
  };

  return (
    <div className="py-10 px-6">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-orange-600">Your cart is empty</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-orange-400 text-left">
              <th className="border border-gray-300 px-4 py-2">Dish Name</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.foodId} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                <td className="border border-gray-300 px-4 py-2">₹&nbsp;{item.price}</td>
                <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
                <td className="border border-gray-300 px-4 p-2 space-x-4">
                  <button
                    onClick={() => removeItem(item.foodId)}
                    className="text-white font-semibold hover:text-red-700 border bg-red-400 p-2 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="mt-2 flex justify-end">
        <button
          onClick={proceedToCheckout}
          className="bg-green-500 border p-2 w-[100px] rounded-md text-white"
        >
          BUY
        </button>
      </div>
    </div>
  );
};

export default Cart;
