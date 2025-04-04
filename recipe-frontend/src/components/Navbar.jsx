import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const storedUsername = localStorage.getItem('username')
    if (storedUsername) {
      setUsername(storedUsername)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('username')
    setUsername('')
    navigate('/login') // redirect to login page
  }

  return (
    <div className='bg-red-500 flex justify-between py-3 px-6 items-center'>
      <Link to={"/home"} className='text-3xl font-bold underline cursor-pointer'>Recipe</Link>

      {username && (
        <div className='text-xl font-semibold'>
          Welcome: {username}
        </div>
      )}

      <div className='flex gap-6 text-2xl font-semibold items-center'>
        <Link to={"/addRecipe"} className='hover:underline duration-100'>
          Add Recipe
        </Link>
        <Link to={"/viewRecipies"} className='hover:underline duration-100'>
          View All
        </Link>
        {username ? (
          <button onClick={handleLogout} className='hover:underline duration-100'>
            Logout
          </button>
        ) : (
          <Link to={"/login"} className='hover:underline duration-100'>
            Logout
          </Link>
        )}
      </div>
    </div>
  )
}
