import { useState } from "react"
import axios from 'axios'
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()
  const [data,setData] = useState({
    name:'',
    email:'',
    password:'',
  })

  const registerUser =async (e) => {
    e.preventDefault();
    const {name,email,password} = data
    try {
      const {data} = await axios.post('/register',{
        name,email,password
      })
      if(data.error){
        toast.error(data.error)
      }
      else{
        setData({})
        toast.success('Login Successful. Welcome!')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className="items-center justify-center">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={registerUser} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register
