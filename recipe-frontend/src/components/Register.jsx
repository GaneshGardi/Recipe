import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();

  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value, // Corrected state update
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(register); // Fixed logging issue
    try{
        const res = await axios.post("http://localhost:8080/addUser", register)
        console.log(res.data)
        alert("User added")
        navigate("/login")
    }catch(err){
        console.log(err);
    }
    
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border dark:border-gray-700">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
          Create an account
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm pb-1 font-medium text-gray-900 dark:text-white">
              Your Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="w-full p-2 text-sm border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Username"
              required
              value={register.username} // Fixed value reference
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block pb-1 text-sm font-medium text-gray-900 dark:text-white">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-2 text-sm border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="name@company.com"
              required
              value={register.email} // Fixed value reference
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="block pb-1 text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full p-2 text-sm border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
              required
              value={register.password} // Fixed value reference
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer py-2 text-lg font-semibold text-white transition duration-200 bg-gray-500 rounded-lg hover:bg-sky-500"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link to={"/login"} className="font-medium text-blue-600 hover:underline dark:text-blue-500">
            Login here
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
