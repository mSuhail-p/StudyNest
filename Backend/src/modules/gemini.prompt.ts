export const COURSE_RESOURCES_PROMPT = (coursname: string) => {
  const prompt = `
Give me five youtube videos links and five websites links about ${coursname}.
Follow this schema:
{
  "studyArea": "string",
  "websites": [{ "title": "string", "url": "string" }],
  "youtubeVideos": [{ "title": "string", "url": "string" }],
  "createdAt": "string"
}
  You are a specialized data extractor. You only output valid JSON based on the provided schema. Do not include markdown code blocks like ${"```json"}
`;
  return prompt;
};
