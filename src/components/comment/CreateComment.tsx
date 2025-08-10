"use client"
import React, { useActionState, useState } from 'react'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { addComment } from '@/actions/add-comment'
import { error } from 'console'
type commentCreateFormProps = {
      postId:string,
      parentId?:string,
      starOpen?:boolean
}
const CreateComment:React.FC<commentCreateFormProps> = ({postId,parentId,starOpen}) => {
      const [isopen,setisOpen] = useState(starOpen)
      const [formState,action] = useActionState(addComment.bind(null,{postId,parentId}),{errors:{}})
  return (
    <div>
      <Button onClick={()=>setisOpen(!isopen)}>Reply</Button>
      {
            isopen && 
            <form action={action}>
            <Textarea name='content'  placeholder='Create comment..' className='my-2'/>
            {
                  formState.errors.content &&
                  <p className='text-red-500'>{formState.errors.content}</p>
            }
            {
                  formState.errors.formError &&
                  <div className='text-red-500'>{formState.errors.formError}</div>
            }
            <Button>Add Comment</Button>
            </form>
      }
    </div>
  )
}

export default CreateComment