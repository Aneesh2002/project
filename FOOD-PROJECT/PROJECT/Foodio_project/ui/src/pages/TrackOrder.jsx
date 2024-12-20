import React, { useState, useEffect } from 'react';

const TrackOrder = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch order details when the component mounts
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch('/api/orderdetails', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Add authorization token if needed
            // 'Authorization': `Bearer ${yourAuthToken}`,
          },
        });
        const data = await response.json();

        if (response.ok) {
          setOrderDetails(data); // Set order data in state
        } else {
          setError('Failed to fetch order details');
        }
      } catch (err) {
        setError('Error fetching order details');
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  return (
    <div className="py-10 px-6">
      <h2 className="text-3xl font-bold mb-6">Order Details</h2>

      {/* Table to display order details */}
      <table className="w-full mb-6">
        <thead>
          <tr>
            <th className="py-2 text-left font-semibold">Order ID</th>
            <th className="py-2 text-left font-semibold">Status</th>
            <th className="py-2 text-left font-semibold">Total Amount</th>
            <th className="py-2 text-left font-semibold">Payment Method</th>
            <th className="py-2 text-left font-semibold">Address</th>
            <th className="py-2 text-left font-semibold">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.map((order) => (
            <tr key={order._id} className="hover:bg-gray-100">
              <td className="py-2">{order._id}</td>
              <td className="py-2">{order.status}</td>
              <td className="py-2">₹{order.totalAmount}</td>
              <td className="py-2">{order.paymentMethod}</td>
              <td className="py-2">{order.address}</td>
              <td className="py-2">{order.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrackOrder;

