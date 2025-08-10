"use server"
import { auth } from "@/auth"
import { prisma } from "@/lib"
import { revalidatePath } from "next/cache"
import {z} from "zod"
const  createCommentSchema = z.object({
      content:z.string().min(3)
})
type createCommonState = {
      errors:{
            content?:string[],
            formError?:string[]
      }
}
export const addComment  = async({postId,parentId}:{postId:string; parentId?:string},prevState:createCommonState,formData:FormData) :Promise<createCommonState> => {
     const result = createCommentSchema.safeParse({
         content:formData.get("content")     
     })
    if(!result.success){
        return{
           errors:result.error.flatten().fieldErrors
        }
    }
    const session = await auth()
    if(!session || !session.user || !session?.user?.id){
      return{
            errors:{
                  formError:["Please login first"]
            }
      }
    }
    try {
          await prisma.comment.create({
            data:{
                  content:result.data.content,
                  postId:postId,
                  userId:session.user.id,
                  parentId:parentId
            }
          })
    } catch (error) {
      if(error instanceof Error){
            return{
                  errors:{
                        formError:[error.message]
                  }
            }
      }else{
            return{
                  errors:{
                        formError:["Something went wrong"]
                  }
            } 
      }
    }
    const topic = await prisma.topic.findFirst({
      where:{
         posts:{some:{id:postId}}
      } 
    })
    if(!topic){
           return{
            errors:{
                  formError:["Failed to revalidate"]
            }
           }
    }
    revalidatePath(`/topics/${topic.slug}/post/${postId}`)
    return{
      errors:{}
    }
}