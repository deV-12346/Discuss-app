import { Postlist } from "@/components/post/Post-list";
import AddTopics from "@/components/topics/AddTopics";
import { fetchTitle } from "@/lib/post/query";

 export default async function Home() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <div className="flex justify-between items-center">
       <h1 className="text-2xl font-bold text-gray-500">Top Posts</h1>
      <AddTopics/>
      </div>
      <div className="flex justify-center items-center w-80 md:w-120 ">
         <Postlist fetchData = {fetchTitle}/>
      </div>
    </div>
      </div>

  )
}