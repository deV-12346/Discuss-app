"use client"
import React from 'react'
import { Input } from './ui/input'
import { useSearchParams } from 'next/navigation'
import { search } from '@/actions/search'
const SearchPost = () => {
      const searchParams = useSearchParams()
  return (
    <div>
      <form action={search} className='flex justify-center items-center'>
        <Input defaultValue={searchParams.get("term")||""} type="text" name='term' placeholder='Search Post...' 
        className='w-70'></Input>
      </form>
    </div>
  )
}

export default SearchPost;