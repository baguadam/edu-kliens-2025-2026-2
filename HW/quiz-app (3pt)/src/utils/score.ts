import type { Questions } from "../data/quiestions";

export const calculateScore = (answers: string[], questions: Questions[]) => {
  return answers.reduce((score, answer, index) => {
    if (answer === questions[index].correct) score++;
    return score;
  }, 0);
};
