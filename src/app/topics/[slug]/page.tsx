import AddPost from '@/components/post/AddPost'
import React from 'react'
type ShowSpecificTopicProps = {
    params :Promise<{slug:string}>
}

const ShowSpecificTopic : React.FC<ShowSpecificTopicProps> = async({params}) => {
  const slug = (await params).slug
  return (
    <div>
      <div className='flex justify-evenly items-center'>
         <h1 className='text-4xl'>{slug.toUpperCase()}</h1>
      <div>
        <AddPost slug={slug}/>
      </div>
      </div>
    </div>
  )
}

export default ShowSpecificTopic