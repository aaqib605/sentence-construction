import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10 bg-white">
      <div className="w-full max-w-xl text-center space-y-10">
        <div className="text-5xl sm:text-6xl">📝</div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Sentence Construction
        </h1>

        <p className="text-gray-600 text-base sm:text-lg">
          Select the correct words to complete the sentence by arranging the
          provided options in the right order.
        </p>

        <div className="flex justify-center gap-10 flex-wrap text-sm sm:text-base">
          <div className="text-center">
            <h3 className="font-semibold text-gray-800">Time Per Question</h3>
            <p className="text-gray-500 mt-1">30 sec</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-gray-800">Total Questions</h3>
            <p className="text-gray-500 mt-1">10</p>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer"
            onClick={() => navigate("/quiz")}
          >
            Start
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
