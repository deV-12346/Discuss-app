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
import { createTopic } from '@/actions/create-topic'

const AddTopics = () => {
      const [formState,action] = useActionState(createTopic,{error:{}})
  return (
    <div>
       <Dialog>
            <DialogTrigger asChild>
            <Button>Add New Topics</Button>
            </DialogTrigger>
            <DialogContent>
                  <DialogHeader>
                        <DialogTitle>Discuss New Topics</DialogTitle>
                        <DialogDescription>Add a new topic so everyone can discuss</DialogDescription>
                  </DialogHeader>
                   <form action={action}>
                  <div>
                        <div className='my-2'>
                              <Label htmlFor='title' className='my-2'>Title</Label>
                              <Input type='text' id='title' name='title' placeholder='type title here...'></Input>
                              {
                              formState.error?.title &&
                              <p className='text-red-500'>{formState.error.title}</p>
                        }
                        </div>
                         <div className='my-2'>
                              <Label htmlFor='description' className='my-2'>Description</Label>
                              <Textarea id='description' name='description' placeholder='type description here...' className='h-40'/>
                        {
                              formState.error?.description &&
                              <p className='text-red-500'>{formState.error.description}</p>
                        }
                        {
                              formState.error?.formError &&
                              <div className='my-2 '>
                              <p className='text-red-500'>Title already exits</p>
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

export default AddTopics