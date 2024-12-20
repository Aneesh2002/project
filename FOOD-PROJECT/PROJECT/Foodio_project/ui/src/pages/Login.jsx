import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Login = () => {
    const [UserName,setUserName]=useState('');
    const[Password,setPassword]=useState('');
    const navigate=useNavigate();

    const loginSubmit = async (e)=>{
      e.preventDefault();
        const loginDetails={
            UserName,
            Password
        };
        const res = await fetch('/api/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(loginDetails),
            credentials:'include'
        });
        if(res.ok){
          const data = await fetch('/api/UserData/userrole', {
            headers: {
              'Content-Type': 'application/json',
            }
          });
          console.log(data);
          
          const respones = await data.json()
      console.log(respones);
      alert('Login Successfull')

      if (respones === 'admin') {
        console.log("hai");
        
        navigate('/admindash')
      } else {

        navigate('/home');
      }
    } else {
      alert('Login Failed')
    }
    }
  return (
    <div className="bg-white flex items-center justify-center min-h-screen">
  <div className="bg-orange-400 p-10 rounded-lg shadow-lg max-w-sm w-full">
    <h2 className="text-3xl font-bold text-white mb-4 text-center">Login</h2>
    <form onSubmit={loginSubmit}>
      <div className="mb-4">
        <label for="email" className="block text-white font-bold mb-2">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={UserName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div className="mb-6">
        <label for="password" className="block text-white font-bold mb-2">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:text-orange-500"
        >
          Login
        </button>
        
      </div>
      <p className="text-center">
        Don't have an account?
        <Link to="/signin" className="text-blue-900 hover:underline">Sign Up</Link>
      </p>
    </form>
  </div>
</div>
  )
}

export default Login