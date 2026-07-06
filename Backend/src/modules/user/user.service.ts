import { GoogleGenAI } from "@google/genai";
import { COURSE_RESOURCES_PROMPT } from "../gemini.prompt";
import { TEXT_VALIDATION_PROMPT } from "../text.validation";
export class userService {
  public ai = new GoogleGenAI({ apiKey: process.env.GEMINI_AI! });

  public async main(courseName: string) {
    // text validation

    const validation = await this.ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: TEXT_VALIDATION_PROMPT(courseName),
    });

    if (!validation.text) {
      throw new Error("validation failed");
    }

    const validationResult = JSON.parse(validation.text);
    if (!validationResult.valid) {
      throw new Error("validationResult.reason");
    }

    // Generate resources
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
