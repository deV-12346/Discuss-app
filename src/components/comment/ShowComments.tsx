import { prisma } from '@/lib'
import React from 'react'
type createCommentProps={
      postid:string
}
const ShowComments:React.FC<createCommentProps> = async({postid}) => {
      const comments = await prisma.comment.findMany({
            where:{
                  postId:postid
            }
      })
  return (
    <div>
      {
           comments.map((comment)=>(
            <div key={comment.id}>
                  <p>{comment.content}</p>
            </div>
           ))
      }
    </div>
  )
}

export default ShowComments