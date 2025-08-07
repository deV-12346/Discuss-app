import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'
import { createTopic } from '@/actions/create-topic'
const AddTopics = () => {
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
                   <form action={createTopic}>
                  <div>
                        <div className='my-2'>
                              <Label htmlFor='title' className='my-2'>Title</Label>
                              <Input type='text' id='title' name='title' placeholder='type title here...'></Input>
                        </div>
                         <div className='my-2'>
                              <Label htmlFor='description' className='my-2'>Description</Label>
                              <Textarea id='description' name='description' placeholder='type description here...' className='h-40'/>
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