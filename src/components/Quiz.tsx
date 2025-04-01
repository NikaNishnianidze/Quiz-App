import { useNavigate, useParams } from "react-router-dom";
import data from "../data.json";
import { useState } from "react";
import correctIcon from "../../public/assets/images/icon-correct.svg";
import WrongIcon from "../../public/assets/images/icon-incorrect.svg";

interface QuizProps {
  title: string;
  icon: string;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
  darkMode: boolean;
}

const Quiz: React.FC<QuizProps> = () => {
  const { pathName } = useParams();
  const quiz = data.find((quiz) => quiz.title == pathName);
  const [count, setCount] = useState<number>(0);
  const [checkAnswer, setCheckAnswer] = useState<boolean | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [point, setPoint] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const options: string[] = ["A", "B", "C", "D"];

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setCheckAnswer(null);
    setError("");
  };

  const submitAnswer = () => {
    const correctAnswer = quiz?.questions[count].answer;

    if (!selectedOption) {
      setError("Please select an answer");
      setCheckAnswer(null);
      return;
    }

    if (selectedOption === correctAnswer) {
      setCheckAnswer(true);
      setPoint(point + 1);
      setError("");
    } else {
      setCheckAnswer(false);
      setError("");
    }
  };
  console.log(point);

  const nextQuestion = () => {
    if (count < (quiz?.questions.length ?? 1) - 1) {
      setCount(count + 1);
      setSelectedOption(null);
      setCheckAnswer(null);
      setError("");
    } else {
      navigate("/result", { state: { point } });
    }
  };

  const progress = (count / (quiz?.questions.length ?? 1)) * 100;

  return (
    <>
      <div className="questions flex flex-col items-center px-[24px] mt-[32px] gap-[12px]">
        <p className="w-[327px] italic text-[#626C7F] text-[14px] font-normal leading-[21px] dark:text-[#ABC1E1]">
          Question {count + 1} of {quiz?.questions.length}
        </p>
        <p className="w-[327px] text-[#313E51] text-[20px] font-normal leading-[24px] dark:text-[#fff]">
          {quiz?.questions[count].question}
        </p>
        <div className="progress-container relative w-[319px] flex flex-col items-center mt-[24px]">
          <input
            type="range"
            min={1}
            max={quiz?.questions.length ?? 1}
            value={count}
            step={1}
            readOnly
            className="range-input "
          />
          <div
            className="progress-line absolute top-0 left-0 "
            style={{
              width: `${progress}%`,
              height: "8px",
              backgroundColor: "#a729f5",
              borderRadius: "999px",
              zIndex: 0,
              position: "absolute",
            }}
          ></div>
        </div>
      </div>

      <div className="options-container mt-[40px] flex flex-col items-center gap-[12px]">
        {quiz?.questions[count].options.map((option, index) => {
          const isCorrect =
            checkAnswer && option === quiz?.questions[count].answer;
          const isIncorrect =
            selectedOption === option && checkAnswer === false;

          return (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`option bg-button p-[12px] rounded-[12px] w-[327px] cursor-pointer p-[12px] flex  items-center justify-between shadow-button-light  ${
                isCorrect ? "border-2 border-[#26D782]" : ""
              } 
                ${
                  isIncorrect ? "border-2 border-[#FF4C4C]" : ""
                } dark:bg-range-input`}
            >
              <div className="left flex flex-row gap-[8px]">
                <div
                  className={`w-[40px] h-[40px] flex flex-col items-center justify-center rounded-[6px] bg-options text-[18px] font-medium text-[#626C7F] ${
                    isCorrect ? "bg-options-correct" : ""
                  } ${isIncorrect ? "bg-options-incorrect" : ""} ${
                    isIncorrect ? "text-[#fff]" : ""
                  } ${isCorrect ? "text-[#fff]" : ""}`}
                >
                  {options[index]}
                </div>
                <button className="text-[16px] text-[#313E51] font-medium dark:text-[#fff]">
                  {option}
                </button>
              </div>
              <div className="right">
                {isCorrect && checkAnswer && (
                  <img
                    src={correctIcon}
                    alt="correctIcon"
                    className="ml-[8px] w-[24px] h-[24px]"
                  />
                )}
                {isIncorrect && (
                  <img
                    src={WrongIcon}
                    alt="wrongIcon"
                    className="ml-[8px] w-[24px] h-[24px] "
                  />
                )}
              </div>
            </div>
          );
        })}
        {checkAnswer === null && (
          <button
            onClick={submitAnswer}
            className="mt-[12px] w-[327px] bg-submit py-[12px] rounded-[12px] shadow-button-light text-[18px] text-[#fff] font-medium"
          >
            Submit Answer
          </button>
        )}
        {checkAnswer !== null && (
          <button
            onClick={nextQuestion}
            className="mt-[12px] w-[327px] bg-submit py-[12px] rounded-[12px] shadow-button-light text-[18px] text-[#fff] font-medium"
          >
            Next Question
          </button>
        )}

        {error && (
          <div className="flex flex-row gap-[8px] mt-[19px] items-center text-[18px] text-[#EE5454] dark:text-[#fff]">
            <img src={WrongIcon} alt="wrongicon" />
            {error}
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
