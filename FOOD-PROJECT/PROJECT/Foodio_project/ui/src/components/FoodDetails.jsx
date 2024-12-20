import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const navigate=useNavigate();

  const fetchUserDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/items', {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Failed to fetch food details');
      }
      const data = await response.json();
      setUsers(data.Alluser || []);
    } catch (error) {
      console.error('Error fetching user details:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleShowUsers = () => {
    setShowUsers(true);
    fetchUserDetails();
  };

  const RemoveUser = async (id) => {
    try {
      const response = await fetch(`/api/delete/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to delete user');
      }

      alert('User deleted successfully!');
      // Remove the user from the state
      setUsers((prevUsers) => prevUsers.filter((user) => user.userName !== username));
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user. Please try again.');
    }
  };
  const logOut = async () => {
    try {
      // Call the backend logout API
      const response = await fetch('/api/logout');
      console.log(response.message); 

      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error.response);
      alert('Failed to log out. Please try again.');
    }
  }
  

  return (
    <>
      <div className="admin-home">
    <div>
    <h1 className="text-2xl font-bold text-center mt-5">Admin Dashboard</h1>
    </div>
    <div className='m-5 ' >
      <button className='bg-orange-400 hover:bg-orange-500'onClick={logOut}>Back</button>
    </div>
        <div className="text-center mt-5">
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            onClick={handleShowUsers}
          >
            Load Users
          </button>
        </div>

        {loading && <p className="text-center mt-5">Loading user details...</p>}

        {showUsers && !loading && users.length > 0 && (
          <div className="user-list mt-5">
            <h2 className="text-xl font-bold mb-3">All Users:</h2>
            <table className="table-auto border-collapse border border-gray-200 w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">No</th>
                  <th className="border border-gray-300 px-4 py-2">First Name</th>
                  <th className="border border-gray-300 px-4 py-2">Last Name</th>
                  <th className="border border-gray-300 px-4 py-2">Username</th>
                  <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.userName} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                    <td className="border border-gray-300 px-4 py-2">{user.firstName || 'N/A'}</td>
                    <td className="border border-gray-300 px-4 py-2">{user.lastName || 'N/A'}</td>
                    <td className="border border-gray-300 px-4 py-2">{user.userName || 'N/A'}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button
                        className="w-20 h-6 bg-red-500 hover:bg-red-600 text-white"
                        onClick={() => RemoveUser(user.userName)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {showUsers && users.length === 0 && (
          <p className="text-center mt-5">No users found.</p>
        )}
      </div>
    </>
  );
};

export default AdminHome;