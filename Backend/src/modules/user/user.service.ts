import { GoogleGenAI } from "@google/genai";
// import { Resources } from "../gemini.prompt"
import { COURSE_SEARCH_PROMPT } from "../geminiSearch.prompt";
export class userService {
  public ai = new GoogleGenAI({ apiKey: process.env.GEMINI_AI! });

  public async main(courseName: string) {
    console.log("here is reached");
    const response = await this.ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: COURSE_SEARCH_PROMPT(courseName),
    });

    if (!response.text) {
      throw new Error("validation failed");
    }
    const parsedResponse = JSON.parse(response.text);
    console.log(parsedResponse, "it is validation result");
    if (!parsedResponse.valid) {
      throw new Error(parsedResponse.reason);
    }

    return JSON.parse(response.text);
  }
}
