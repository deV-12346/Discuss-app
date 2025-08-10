import { prisma } from '@/lib'
import React from 'react'
type showPostProps = {
      postid:string
}
const PostShow:React.FC<showPostProps> = async({postid}) => {
      const post = await prisma.post.findFirst({
            where:{
                  id:postid
            }
      })
  return (
    <div>
      <p className='text-3xl'>{post?.title}</p>
      <p className='border-2 p-2 my-2'>{post?.content}</p>
    </div>
  )
}

export default PostShow