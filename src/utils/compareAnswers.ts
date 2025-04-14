import { UserAnswer, Question } from "../vite-env";

export const compareAnswers = (
  userAnswers: UserAnswer[],
  questions: Question[]
) => {
  return userAnswers.map((userAnswer) => {
    const correctAnswer = questions.find(
      (q) => q.questionId === userAnswer.questionId
    )?.correctAnswer;

    const isCorrect =
      JSON.stringify(userAnswer.selectedAnswer) ===
      JSON.stringify(correctAnswer);

    return {
      question: questions.find((q) => q.questionId === userAnswer.questionId)
        ?.question,
      userAnswer,
      correctAnswer,
      isCorrect,
    };
  });
};
