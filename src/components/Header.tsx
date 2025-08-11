import React from 'react'
import AuthHeader from './AuthHeader'
import SearchPost from './SearchPost'

const Header = async () => {
  return (
    <div className='flex flex-col md:flex-row  justify-evenly items-center gap-3 md:gap-10 py-3'>
      <h1 className='text-2xl text-center text-red-500'>Discuss</h1>
      <SearchPost/>
    <AuthHeader/>
    </div>
  )
}

export default Header