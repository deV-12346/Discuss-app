"use server"
export const createTopic = async(formData:FormData) =>{
      const title = formData.get("title")
      const description = formData.get("description")
      console.log(title,description)
}