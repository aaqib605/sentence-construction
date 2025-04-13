import { ResultProps } from "../vite-env";

export default function Result({
  score,
  total,
  onRestart,
  userAnswers,
  correctAnswers,
}: ResultProps) {
  const percentage = Math.round((score / total) * 100);

  const getCircleColor = () => {
    if (percentage >= 80) return "text-green-600 border-green-600";
    if (percentage >= 50) return "text-yellow-500 border-yellow-500";
    return "text-red-500 border-red-500";
  };

  const getFeedbackMessage = () => {
    if (percentage >= 80) {
      return "While you correctly formed several sentences, there are a couple of areas where improvement is needed. Pay close attention to sentence structure and word placement to ensure clarity and correctness. Review your responses below for more details.";
    }
    if (percentage >= 50) {
      return "You've demonstrated a good understanding of sentence construction, but there's room for improvement. Focus on word order and sentence flow to enhance your writing. Practice with more examples to strengthen your skills.";
    }
    return "You're making progress with sentence construction, but more practice is needed. Pay attention to the correct order of words and how they relate to each other. Consider reviewing basic sentence structure rules and try again.";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-3/5 max-lg:w-4/5 max-md:w-5/5 p-8 text-center my-10">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div
              className={`w-32 h-32 rounded-full border-8 flex items-center justify-center ${getCircleColor()}`}
            >
              <span className="text-5xl font-bold">{percentage}</span>
            </div>
            <div className="mt-2 text-gray-600">Overall Score</div>
          </div>
        </div>

        <p className="text-gray-700 mb-8 text-center">{getFeedbackMessage()}</p>

        <div className="text-left mb-8">
          <h3 className="text-lg font-semibold mb-4">Your Answers:</h3>
          <ul className="space-y-4">
            {userAnswers.map((userAnswer, index) => {
              const correctAnswer = correctAnswers.find(
                (q) => q.questionId === userAnswer.questionId
              );
              const isCorrect =
                JSON.stringify(userAnswer.selectedAnswer) ===
                JSON.stringify(correctAnswer?.correctAnswer);

              return (
                <li
                  key={userAnswer.questionId}
                  className="p-4 border rounded-lg shadow-sm bg-gray-50"
                >
                  <p className="font-medium text-gray-800">
                    {index + 1}. {correctAnswer?.question}
                  </p>
                  <p className="text-sm mt-2">
                    <span className="font-semibold">Your Answer:</span>{" "}
                    {userAnswer.selectedAnswer.join(" ")}
                  </p>
                  <p className="text-sm mt-1">
                    <span className="font-semibold">Correct Answer:</span>{" "}
                    {correctAnswer?.correctAnswer.join(" ")}
                  </p>
                  <p
                    className={`mt-2 text-sm font-semibold ${
                      isCorrect ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {isCorrect ? "Correct" : "Incorrect"}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        <button
          onClick={onRestart}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl transition-all"
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
}
