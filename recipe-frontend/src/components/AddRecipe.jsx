import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AddRecipe = () => {

  const navigate = useNavigate();

  const [addRecipe, setAddRecipe] = useState({
    title:'',
    ingredients:'',
    description:'',
    cookingProcedure:'',
    timeToCook:''
  })
  
  const handleChange = (e) => {
    setAddRecipe({
      ...addRecipe,
      [e.target.name]:e.target.value
    })

  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("submit was clicked")
    try{
      const userId = localStorage.getItem("userId")
      const response = await axios.post(`http://localhost:8080/addRecipe/${userId}`, addRecipe)
      console.log("recipe added", response.data)
      alert("Recipe Added Successfully !")
      navigate('/viewRecipies')
    }catch(err){
      console.log("error in added recipe", err);
    }
  }
  return (
    <div className='bg-[#EFDCAB] w-full h-screen flex items-center justify-center'>

      <div className='bg-sky-500 p-6 rounded-xl w-[490px]'>
        <form onSubmit={handleSubmit}>
          <h1 className='text-2xl font-semibold flex justify-center pb-6'> Add Recipe</h1>
          <div className='flex flex-col'>
          <label htmlFor='title' className='pb-1 text-xl'>Title:</label>
          <input onChange={handleChange} name='title' type='text' placeholder='Title' className='w-full focus:bg-gray-500 outline-none rounded border-1 px-2 py-2'></input>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='ingredients' className='pb-1 text-xl'>Ingredients:</label>
          <input onChange={handleChange} name='ingredients' type='text' placeholder='Ingredients' className='w-full focus:bg-gray-500 outline-none rounded border-1 px-2 py-2'></input>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='description' className='pb-1 text-xl'>Description:</label>
          <input onChange={handleChange} name='description' type='text' placeholder='Description' className='w-full focus:bg-gray-500 outline-none rounded border-1 px-2 py-2'></input>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='cookingProcedure' className='pb-1 text-xl'>Procedure:</label>
          <textarea onChange={handleChange} name='cookingProcedure' placeholder='Procedure' className='w-full focus:bg-gray-500 outline-none rounded border-1 px-2 py-2 h-[150px]'></textarea>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='timeToCook' className='pb-1 text-xl'>Time To Cook(In Minutes):</label>
          <input onChange={handleChange} name='timeToCook' type='number' placeholder='Time' className='w-full focus:bg-gray-500 outline-none rounded border-1 px-2 py-2'></input>
          </div>

          <div className='w-full mt-6 p-3 rounded-xl flex justify-center bg-amber-400 text-center cursor-pointer'> 
            <button type='submit' className='text-xl font-semibold'> 
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
