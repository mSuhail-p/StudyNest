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
const text_validation_1 = require("../text.validation");
class userService {
    constructor() {
        this.ai = new genai_1.GoogleGenAI({ apiKey: process.env.GEMINI_AI });
    }
    main(courseName) {
        return __awaiter(this, void 0, void 0, function* () {
            // text validation
            const validation = yield this.ai.models.generateContent({
                model: "gemini-3-flash-preview",
                contents: (0, text_validation_1.TEXT_VALIDATION_PROMPT)(courseName),
            });
            if (!validation.text) {
                throw new Error("validation failed");
            }
            const validationResult = JSON.parse(validation.text);
            if (!validationResult.valid) {
                throw new Error("validationResult.reason");
            }
            // Generate resources
            const response = yield this.ai.models.generateContent({
                model: "gemini-3-flash-preview",
                contents: (0, gemini_prompt_1.COURSE_RESOURCES_PROMPT)(courseName),
            });
            console.log(response.text);
            if (!response.text) {
                throw new Error("Gemini returned empty response");
            }
            return JSON.parse(response.text);
            // return response.text;
        });
    }
}
exports.userService = userService;
