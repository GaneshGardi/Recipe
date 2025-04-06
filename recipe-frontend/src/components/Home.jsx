import React from 'react'
import { ExploreRecipe } from './ExploreRecipe'
import { Contact } from './Contact'

function Home() {
  return (
    <div className='w-full bg-[#F8F4E1]'>
      
      {/* Hero Section - takes up the screen minus navbar height */}
      <section className='h-[calc(100vh-64px)] flex items-center justify-center'>
        <h1 className='text-2xl font-semibold text-gray-800'>
          Find your Recipe...
        </h1>
      </section>

      {/* Scrollable Section - appears when you scroll down */}
      <section>
        <ExploreRecipe />
      </section>
      
      <section>
        <Contact/>
      </section>
    </div>
  )
}

export default Home
