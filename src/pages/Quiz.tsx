import React, { useCallback, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { Question } from "../vite-env";

export default function Quiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState<(string | null)[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(30);

  const currentQuestion = questions[currentIndex];

  const handleWordSelect = (word: string) => {
    const index = selectedWords.findIndex((val) => val === null);
    if (selectedWords.includes(word)) {
      setSelectedWords((prev) =>
        prev.map((val) => (val === word ? null : val))
      );
    } else if (index !== -1) {
      const newSelections = [...selectedWords];
      newSelections[index] = word;
      setSelectedWords(newSelections);
    }
  };

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedWords(
        new Array(questions[currentIndex + 1].correctAnswer.length).fill(null)
      );
    } else {
      alert("All questions completed!");
    }
  }, [currentIndex, questions]);

  const parts = currentQuestion?.question.split("_____________");

  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.questions);
        setSelectedWords(
          new Array(data.questions[0].correctAnswer.length).fill(null)
        );
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNext();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, handleNext]);

  useEffect(() => {
    setTimeLeft(30);
  }, [currentIndex]);

  if (loading || !currentQuestion) return <div className="p-8">Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-6 sm:p-10 flex flex-col justify-between min-h-[600px]">
        <div>
          {/* Timer and Progress */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium">
              0:{timeLeft.toString().padStart(2, "0")}
            </span>
            <button className="border px-3 py-1 rounded-md text-sm">
              Quit
            </button>
          </div>
          <div className="flex gap-2 justify-center mb-6">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                  i <= currentIndex ? "bg-orange-400" : "bg-gray-200"
                }`}
              />
            ))}
          </div>

          {/* Title */}
          <h2 className="text-center text-gray-700 font-semibold mb-8 text-base sm:text-lg">
            Select the missing words in the correct order
          </h2>

          {/* Sentence */}
          <div className="text-lg sm:text-xl text-center sm:px-12 leading-8 mb-12">
            {parts.map((part, i) => (
              <React.Fragment key={i}>
                <span>{part.trim()} </span>
                {i < selectedWords.length && (
                  <span className="inline-block border-b-2 border-black min-w-[80px] px-2 mx-1">
                    {selectedWords[i] && (
                      <span className="border px-2 py-0.5 rounded-md text-sm sm:text-base bg-gray-50">
                        {selectedWords[i]}
                      </span>
                    )}
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Options */}
          <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto mb-10">
            {currentQuestion.options.map((word) => {
              const isSelected = selectedWords.includes(word);
              return (
                <button
                  key={word}
                  className={`border rounded-md px-4 py-2 text-sm sm:text-base
                  ${
                    isSelected
                      ? "bg-gray-200 border-black"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleWordSelect(word)}
                >
                  {word}
                </button>
              );
            })}
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-xl disabled:bg-gray-300 transition-all"
            onClick={handleNext}
            disabled={selectedWords.includes(null)}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
