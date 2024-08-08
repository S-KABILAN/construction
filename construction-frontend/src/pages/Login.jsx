import { useState } from "react";
import axios from "axios"
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const [data,setData] = useState({
    email:'',
    password:''
  })

  const loginUser =async (e) =>{
    e.preventDefault()
    const {email,password} = data
    try {
      const {data} = await axios.post('/login',{
        email,
        password
      });
      if(data.error){
        toast.error(data.error)
      }
      else{
        setData({});
        navigate('/dashboard');

      }
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={loginUser} className="space-y-6">
        <div>
          <label className="block font-semibold ">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block font-semibold ">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login
