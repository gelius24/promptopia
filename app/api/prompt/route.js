import { connectToDB } from "@/utils/database"
import Prompt from "@/models/prompt"

export const GET = async (req) => {
  const test = req;
  try {
    await connectToDB()
    const prompts = await Prompt.find({}).populate('creator')
    return req(JSON.stringify(prompts), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 })
  }
}