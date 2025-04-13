/// <reference types="vite/client" />

export type Question = {
  questionId: string;
  question: string;
  options: string[];
  correctAnswer: string[];
};
