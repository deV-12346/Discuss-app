import CreateComment from '@/components/comment/CreateComment';
import PostShow from '@/components/post/Post-Show';
import React from 'react'
import Link from 'next/link'
import ShowComments from '@/components/comment/ShowComments';
type showProps  ={
  params:Promise<{slug:string;postid:string}>
}
const Post:React.FC<showProps> = async({params}) => {
  const {slug,postid} = (await params)
  return (
    <div>
      <Link href={`/topics/${slug}`} className='hover:underline text-xl'>
            <button>Back to {slug}</button>
      </Link>
      <PostShow postid={postid} />
      <CreateComment postId={postid} starOpen/>
      <ShowComments postid={postid} />
    </div>
  )
}

export default Post