type ResultProps = {
  score: number;
  total: number;
  onRestart: () => void;
};

export default function Result({ score, total, onRestart }: ResultProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Quiz Completed!
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          You got <span className="font-bold">{score}</span> out of{" "}
          <span className="font-bold">{total}</span> correct.
        </p>
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
