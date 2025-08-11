import { Postlist } from '@/components/post/Post-list'
import { fetchPostBySearch } from '@/lib/post/query'
import React from 'react'
type searchPageProps = {
      searchParams:Promise<{term:string}>;
};
const  SearchPage:React.FC<searchPageProps> = async({searchParams}) => {
      const term = (await searchParams).term
  return (
    <div>
     <h1>Search result of {term}</h1>
     <Postlist fetchData={()=>fetchPostBySearch(term)}/>
    </div>
  )
}

export default SearchPage;