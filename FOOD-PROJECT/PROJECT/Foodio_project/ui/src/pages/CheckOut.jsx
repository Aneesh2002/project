import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Checkout = () => {
  const navigate = useNavigate();
  
  // States for the checkout form
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // Fetch cart data when component mounts
  useEffect(() => {
    // Replace with actual user ID logic
    const userId = 'user1';

    fetch(`/api/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.items) {
          setCartItems(data.items);
          const total = data.items.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
          );
          setTotalAmount(total);
        }
      })
      .catch((error) => console.error('Error fetching cart:', error));
  }, []);

  const handlePlaceOrder = async () => {
    const orderDetails = {
      userId: 'user1',  // Replace with actual user ID
      address: address,
      phoneNumber: phoneNumber,
      paymentMethod: paymentMethod,
    };

    try {
      const response = await fetch('/api/placeOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Order placed successfully!');
        // Redirect to homepage or order success page
        navigate('/home');
      } else {
        alert(data.message || 'Failed to place the order');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Error occurred while placing the order');
    }
  };

  return (
    <>
    <Navbar />
    <div className="py-10 px-6">
      <h2 className="text-3xl bg-orange-500 font-bold mb-6">Checkout</h2>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Address:</label>
        <textarea
          className="w-full border p-2"
          rows="3"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Phone Number:</label>
        <input
          type="text"
          className="w-full border p-2"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Payment Method:</label>
        <select
          className="w-full border p-2"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Select Payment Method</option>
          <option value="UPI">UPI</option>
          <option value="COD">Cash on Delivery</option>
        </select>
      </div>

      <h3 className="text-xl font-semibold">Cart Summary</h3>
      <div className="mb-4">
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <li key={item.foodId}>
                <div>
                  <span>{item.name} </span>
                  <span>x{item.quantity}</span>
                  <span> - ₹{item.price * item.quantity}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>

      <div className="mb-4">
        <strong>Total: ₹{totalAmount}</strong>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="bg-orange-500 text-white font-semibold p-2 rounded-md"
      >
        Place Order
      </button>
    </div>
    <Footer />
    </>
  );
};

export default Checkout;
