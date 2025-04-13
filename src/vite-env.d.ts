/// <reference types="vite/client" />

export type Question = {
  questionId: string;
  question: string;
  options: string[];
  correctAnswer: string[];
};

export type UserAnswer = {
  questionId: string;
  selectedAnswer: string[];
};

export type ResultProps = {
  score: number;
  total: number;
  onRestart: () => void;
  userAnswers: UserAnswer[];
  correctAnswers: Question[];
};
