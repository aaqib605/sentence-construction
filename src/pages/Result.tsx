import { ResultProps } from "../vite-env";
import { getFeedbackMessage } from "../utils/feedback";
import { compareAnswers } from "../utils/compareAnswers";

export default function Result({
  score,
  total,
  onRestart,
  userAnswers,
  questions,
}: ResultProps) {
  const percentage = Math.round((score / total) * 100);
  const feedbackMessage = getFeedbackMessage(percentage);
  const answerComparison = compareAnswers(userAnswers, questions);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-3/5 max-lg:w-4/5 max-md:w-5/5 p-8 text-center my-10">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div
              className={`w-32 h-32 rounded-full border-8 flex items-center justify-center ${
                percentage >= 80
                  ? "text-green-600 border-green-600"
                  : percentage >= 50
                  ? "text-yellow-500 border-yellow-500"
                  : "text-red-500 border-red-500"
              }`}
            >
              <span className="text-5xl font-bold">{percentage}</span>
            </div>
            <div className="mt-2 text-gray-600">Overall Score</div>
          </div>
        </div>

        <p className="text-gray-700 mb-8 text-center">{feedbackMessage}</p>

        <div className="text-left mb-8">
          <h3 className="text-lg font-semibold mb-4">Your Answers:</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Question</th>
                <th className="border border-gray-300 px-4 py-2">
                  Your Answer
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Correct Answer
                </th>
                <th className="border border-gray-300 px-4 py-2">Result</th>
              </tr>
            </thead>
            <tbody>
              {answerComparison.map((comparison, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {comparison.question}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {comparison.userAnswer.selectedAnswer.join(" ")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {comparison.correctAnswer
                      ? comparison.correctAnswer.join(" ")
                      : "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {comparison.isCorrect ? "✅" : "❌"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          onClick={onRestart}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl transition-all cursor-pointer"
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
}
