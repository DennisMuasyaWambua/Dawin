import React from 'react'
import ExploreButton from './exploreButton'
import Specialties from './specialties'

const Welcome = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
        
        <div className="absolute top-1/3 w-full text-center">
        <p className="text-red-600 text-lg font-semibold">Welcome to Dawin Tours and Travel</p>
        <h1 className="text-5xl font-bold" style={{color: '#007FFF'}}>THE WORLD IS WAITING</h1>
      </div>
      
    </div>
  )
}

export default Welcome