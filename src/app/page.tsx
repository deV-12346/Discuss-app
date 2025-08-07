import AddTopics from "@/components/topics/AddTopics";

 export default async function Home() {
  return (
    <div>
      <div className="flex justify-evenly items-center">
       <h1 className="text-2xl font-light text-gray-500">Home Page</h1>
      <AddTopics/>
      </div>
    </div>

  )
}