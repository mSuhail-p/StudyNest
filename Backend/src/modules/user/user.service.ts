import { GoogleGenAI } from "@google/genai";

export class userService {
  public ai = new GoogleGenAI({apiKey:process.env.GEMINI_AI!})

  public async main() {
    const response = await this.ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `give me five youtube channels link and five websites link about webdevelpement,
"      {
  studyArea: String,          // "Web Development"
  websites: [
    {
      title: String,          // "MDN Web Docs"
      url: String             // "https://developer.mozilla.org"
    }
  ],
  youtubeChannels: [
    {
      title: String,          // "freeCodeCamp"
      url: String             // "https://www.youtube.com/@freecodecamp"
    }
  ],
  createdAt: Date

  i need only this json data , no more texts , 
}`,
    });
    console.log( typeof response.text);
  }
}
