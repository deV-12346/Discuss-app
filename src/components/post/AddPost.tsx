"use client"
import React, { useActionState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'
import { addPost } from '@/actions/add-post'
type cretePostFormProps = {
      slug:string
}
const AddPost : React.FC<cretePostFormProps> = ({slug}) => {
      const [formState,action] = useActionState(addPost.bind(null,slug),{errors:{}})
  return (
    <div>
       <Dialog>
            <DialogTrigger asChild>
            <Button>Add New Post</Button>
            </DialogTrigger>
            <DialogContent>
                  <DialogHeader>
                        <DialogTitle>Discuss New Post</DialogTitle>
                        <DialogDescription>Add a new post so everyone can discuss</DialogDescription>
                  </DialogHeader>
                   <form action={action}>
                  <div>
                        <div className='my-2'>
                              <Label htmlFor='title' className='my-2'>Title</Label>
                              <Input type='text' id='title' name='title' placeholder='type title here...'></Input>
                              {
                              formState.errors?.title &&
                              <p className='text-red-500'>{formState.errors.title}</p>
                        }
                        </div>
                         <div className='my-2'>
                              <Label htmlFor='content' className='my-2'>Content</Label>
                              <Textarea id='content' name='content' placeholder='type content here...' className='h-40'/>
                        {
                              formState?.errors?.content &&
                              <p className='text-red-500'>{formState.errors.content}</p>
                        }
                        {
                              formState.errors?.formError &&
                              <div className='my-2 '>
                              <p className='text-red-500'>{formState.errors?.formError}</p>
                              </div>
                        }
                        </div>
                        <div className='text-center'>
                             <Button type='submit'>Add</Button>
                        </div>
                  </div>
                   </form>
            </DialogContent>
       </Dialog>
    </div>
  )
}

export default AddPost