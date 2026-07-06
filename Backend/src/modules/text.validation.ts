export const TEXT_VALIDATION_PROMPT = (courseName: string) => {
  return `You are a validator.

Determine whether the following input is a valid educational course, programming language,
technology, academic subject, certification, framework, software tool, or professional skill
that someone can intentionally study.

If it is valid, return:

{
  "valid": true,
  "reason": ""
}

If it is NOT a study topic, return:

{
  "valid": false,
  "reason": "Not a valid study topic."
}

Rules:
- Return ONLY valid JSON.
- Do not use markdown.
- Do not explain anything.
- Do not guess.

Input:
"${courseName}"
`;
};
