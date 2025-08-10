import AddPost from '@/components/post/AddPost'
import { Postlist } from '@/components/post/Post-list'
import { fetchPost } from '@/lib/post/query'
import React from 'react'
type ShowSpecificTopicProps = {
    params :{slug:string}
}

const ShowSpecificTopic  = async({params}:ShowSpecificTopicProps) => {
  const slug =  params.slug
  return (
    <div className='md:mx-10'>
      <div className='flex justify-evenly items-center'>
         <h1 className='text-4xl font-bol d'>{slug.toUpperCase()}</h1>
      <div>
        <AddPost slug={slug}/>
      </div>
      </div>
      <div className='flex justify-center items-center'>
         <Postlist fetchData = {()=> fetchPost(slug) }/>
      </div>
    </div>
  )
}

export default ShowSpecificTopic