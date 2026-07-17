import { GoogleGenAI } from "@google/genai";
import { Resources } from "../gemini.prompt";
import { COURSE_SEARCH_PROMPT } from "../geminiSearch.prompt";
export class userService {
  // public ai = new GoogleGenAI({ apiKey: process.env.GEMINI_AI! });

  public async main(courseName: string) {
    const response = Resources;
    if (!response.valid) {
      /* !responce.valid */

      throw new Error(
        "Invalid search. Please enter a valid course name or subject to start learning.",
      );
    }
    return response;

    // text validation

    // const validation = await this.ai.models.generateContent({
    //   model: "gemini-3-flash-preview",
    //   contents: TEXT_VALIDATION_PROMPT(courseName),
    // });

    // if (!validation.text) {
    //   throw new Error("validation failed");
    // }
    // console.log(validation.text, "it is validation text");
    // const validationResult = JSON.parse(validation.text);
    // console.log(validationResult, "it is validation result");
    // if (!validationResult.valid) {
    //   throw new Error(validationResult.reason);
    // }

    // Generate resources
    // const response = await this.ai.models.generateContent({
    //   model: "gemini-3-flash-preview",
    //   contents: COURSE_SEARCH_PROMPT(courseName),
    // });

    // return JSON.parse(response.text);
  }
}
