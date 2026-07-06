export const COURSE_RESOURCES_PROMPT = (coursename: string) => {
  const prompt = `
Give me five YouTube video links and five website links about "${coursename}".

Return ONLY this JSON:

{
  "studyArea": "string",
  "websites": [
    {
      "title": "string",
      "url": "string"
    }
  ],
  "youtubeVideos": [
    {
      "title": "string",
      "url": "string"
    }
  ],
  "createdAt": "string"
}

Return only valid JSON.
Do not use markdown.
Do not explain anything.
`;
  return prompt;
};
