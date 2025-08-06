import { GoogleGenAI } from "@google/genai";

const api = import.meta.env.VITE_GEMINI_API_KEY;
if (!api) throw new Error("API key missing!");
const ai = new GoogleGenAI(api);

export default async function main(prompt) {
  const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  return result.response.text();
}
