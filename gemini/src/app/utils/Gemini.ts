import { GoogleGenerativeAI } from "@google/generative-ai";

export const gemini = async (userPrompt:string) => {

    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
        throw new Error('NEXT_PUBLIC_GEMINI_API_KEY is not defined');
    }
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });



    const result = await model.generateContent(userPrompt);
    const response = result.response.text();
    return response
}