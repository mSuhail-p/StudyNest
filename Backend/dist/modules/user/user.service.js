"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const genai_1 = require("@google/genai");
const gemini_prompt_1 = require("../gemini.prompt");
class userService {
    constructor() {
        this.ai = new genai_1.GoogleGenAI({ apiKey: process.env.GEMINI_AI });
    }
    main(courseName) {
        return __awaiter(this, void 0, void 0, function* () {
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
            const response = gemini_prompt_1.Resources;
            console.log(response.websites);
            // if (!response.text) {
            //   throw new Error("Gemini returned empty response");
            // }
            // return JSON.parse(response.text);
            return response;
        });
    }
}
exports.userService = userService;
