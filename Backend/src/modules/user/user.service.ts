import { GoogleGenAI } from "@google/genai";
import { COURSE_RESOURCES_PROMPT } from "../gemini.prompt";
export class userService {
  public ai = new GoogleGenAI({ apiKey: process.env.GEMINI_AI! });

  public async main(courseName: string) {
    const response = await this.ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: COURSE_RESOURCES_PROMPT(courseName),
    });
    console.log(response.text);
    if (!response.text) {
      throw new Error("Gemini returned empty response");
    }
    return JSON.parse(response.text);
    // return response.text;
  }
}
