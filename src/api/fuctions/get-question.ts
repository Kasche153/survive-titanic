import { api } from "api/api";

const layers = 5;
let layerIndex = 0;

export const getQuestion = async (
  answers: boolean[]
): Promise<{
  label: string;
  survivors: number;
  fatalities: number;
  error: number;
  final: boolean;
}> => {
  let query = `
  query{
        getQuestion{
          label
          survivors
          fatalities
          error
          final
  `;
  for (const i of answers) {
    if (i) {
      query += `nextQuestionYes{
        label
        survivors
        fatalities
        error
        final
        
        `;
    } else {
      query += `nextQuestionNo{
        label
        survivors
        fatalities
        error
        final
        
        
        `;
    }
  }
  query += "}".repeat(answers.length);
  query += "}}";

  const res = await api.makeQuery(query);
  let out = res.getQuestion;

  while (out.nextQuestionYes || out.nextQuestionNo) {
    if (out.nextQuestionYes) out = out.nextQuestionYes;
    if (out.nextQuestionNo) out = out.nextQuestionNo;
  }

  return out;
};

export const getWholeObject = async () => {
  const query = `query{
    getAllQuestion
  }`;
  const res = await api.makeQuery(query);
  return JSON.parse(res.getAllQuestion);
};
export type Question = {
  label?: string;
  survivors?: number;
  fatalities?: number;
  error?: number;
  final?: boolean;
};
