import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email + " " + password)
        
        const data = {
            "email": email,
            "password": password
        }

        try{
            const res = await axios.post("http://localhost:8080/login", data);

            if(res.data == false){
                alert("invalid credentials")
            }else{
                alert("Login Success")
                navigate("/home")
            }
        }catch(err){
            console.log(err);
        }
    }


  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border dark:border-gray-700">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
          Create an account
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
         
          <div>
            <label htmlFor="email" className="block pb-1  text-sm font-medium text-gray-900 dark:text-white">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-2 text-sm border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="name@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer py-2 text-lg font-semibold text-white transition duration-200 bg-gray-500 rounded-lg hover:bg-sky-500"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
          Don't have an account?{" "}
          <Link to={"/register"} className="font-medium text-blue-600 hover:underline dark:text-blue-500">
            Register 
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Login