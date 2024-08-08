import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function Dashboard(){
    const  {user} = useContext(UserContext)
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        {user && (
          <h2 className="mt-4 text-2xl text-gray-700">
            Hi, <span className="font-semibold text-blue-600">{user.name}</span>
            !
          </h2>
        )}
      </div>
    );
}