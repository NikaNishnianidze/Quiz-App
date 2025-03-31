import { useParams } from "react-router-dom";
import data from "../data.json";
import { useState } from "react";

interface QuizProps {
  title: string;
  icon: string;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
}

const Quiz: React.FC<QuizProps> = () => {
  const { pathName } = useParams();
  const quiz = data.find((quiz) => quiz.title == pathName);
  const [count, setCount] = useState<number>(0);

  const progress = (count / (quiz?.questions.length ?? 1)) * 100;

  return (
    <>
      <div className="questions flex flex-col items-center px-[24px] mt-[32px] gap-[12px]">
        <p className="w-full italic text-[#626C7F] text-[14px] font-normal leading-[21px] dark:text-[#ABC1E1]">
          Question {count + 1} of {quiz?.questions.length}
        </p>
        <p className="w-full text-[#313E51] text-[20px] font-normal leading-[24px] dark:text-[#fff]">
          {quiz?.questions[count].question}
        </p>
        <div className="progress-container relative w-full mt-4">
          <input
            type="range"
            min={0}
            max={quiz?.questions.length ?? 1}
            value={count}
            step={1}
            readOnly
            className="w-[319px] h-[8px] bg-button-dark rounded-[999px]"
          />
          <div
            className="progress-line absolute top-0 left-0 h-2 bg-blue-500 rounded-lg"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
