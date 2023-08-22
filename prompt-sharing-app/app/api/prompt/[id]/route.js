import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, {params}) => {
    try {
        await connectToDB();        
        const prompts = await Prompt.find(params.id).populate('creator');
        console.log("Prompts", prompts);
        if(!prompts){
            return new Response("Prompt not found!", {status:404});
        }
        return new Response(JSON.stringify(prompts),{
            status:200
        })
    } catch (error) {
        return new Response("Failed to fetch all prompts",{
            status:500
        })
    }
}

export const PATCH = async (request, {params}) => {
    const {prompt, tag} = await request.JSON();
    try {
        await connectToDB();
        const existingPrompts = await Prompt.findById(params.id);
        if(!existingPrompts){
            return new Response("Prompt not found!", {status:404});
        }
        existingPrompts.prompt = prompt;
        existingPrompts.tag = tag;
        await existingPrompts.save();
        return new Response(JSON.stringify(existingPrompts),{
            status:200
        })
    } catch (error) {
        return new Response("Failed to fetch all prompts",{
            status:500
        })
    }
}
export const DELETE = async (request, {params}) => {
    try {
        await connectToDB();
        await Prompt.findByIdAndDelete(params.id);
        return new Response("Prompt deleted successfully!",{
            status:200
        })
    } catch (error) {
        return new Response("Failed to delete prompt!",{
            status:500
        });
    }
}