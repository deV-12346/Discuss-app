"use server"
import { auth } from "@/auth"
import { prisma } from "@/lib"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z} from "zod"
import type { Topic } from "@prisma/client";
const createTopicSchema = z.object({
      title:z.string().min(3).regex(/^[a-z-]+$/,{message:" Must be in lower case with space"}),
      description:z.string().min(5)
})
type CreateTopicFormState = {
      error?:{
            title?:string[],
            description?:string[],
            formError?:string[]
      }
}
export const createTopic = async(prevState:{message:string},formData:FormData) : Promise<CreateTopicFormState> =>{
      const result = createTopicSchema.safeParse({
            title:formData.get('title'),
            description:formData.get('description')
      })
      if(!result.success){
       return {
            error:result.error.flatten().fieldErrors
       }
      }
      const session = await auth()
      if(!session || !session?.user){
            return{
                  error:{
                        formError:["You have to login first"]
                  }
            }
      }
      console.log(result)
      let topic : Topic;
      try {
            topic = await prisma.topic.create({
                  data:{
                        slug:result.data.title,
                        description:result.data.description
                  }
            })
      } catch (error) {
            if(error instanceof Error){
                  return {
                        error:{
                              formError:[error.message]
                        }
                  }
            }
            else{
                  return{
                        error:{
                              formError:["Something went wrong"]
                        }
                  }
            }
      }
      revalidatePath('/')
      redirect(`/topics/${topic.slug}`)
}