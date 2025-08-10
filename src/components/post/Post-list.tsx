import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { PostWithData } from '@/lib/post/query'
type PostlistProps ={
      fetchData:()=>Promise<PostWithData[]>
}
export const Postlist  = async({fetchData}:PostlistProps) => {
      const posts = await fetchData()
      console.log(posts)
  return (
    <div className='my-5 w-100 md:w-140'>
    
          {
            posts.map((post)=>(
                  <Card key={post.id} className='my-4'>
                        <CardHeader>
                        <CardTitle className='font-bold'>{post.title}</CardTitle>
                        <CardDescription className='flex justify-between items-center'>
                              <h1>By {post.user.name}</h1>
                              <h1>{post._count.comments} comments</h1>
                        </CardDescription>
                        </CardHeader>
                  </Card>
            ))
      }
    
    </div>
  )
}
