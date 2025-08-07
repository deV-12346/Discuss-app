import React from 'react'
import { Input } from './ui/input'

import AuthHeader from './AuthHeader'

const Header = async () => {
  return (
    <div className='flex flex-col md:flex-row  justify-evenly items-center gap-3 md:gap-10 py-3'>
      <h1 className='text-2xl text-center text-red-500'>Discuss</h1>
      <form action="" className='flex justify-center items-center'>
        <Input type="text" placeholder='Search Post...' className='w-70'></Input>
      </form>
    <AuthHeader/>
    </div>
  )
}

export default Header