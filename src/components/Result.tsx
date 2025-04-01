import { useLocation, useNavigate } from "react-router-dom";
import accessibility from "../../public/assets/images/icon-accessibility.svg";

interface ResultProps {
  darkMode: boolean;
}

const Result: React.FC<ResultProps> = () => {
  const location = useLocation();
  const point = location.state?.point;
  const navigate = useNavigate();

  const playAgain = () => {
    navigate("/");
  };

  return (
    <div className="result flex flex-col items-center justify-center px-[24px]">
      <div className="text mt-[32px] w-[327px]">
        <h1 className="text-[#313E51] text-[40px] font-light ">
          Quiz completed
        </h1>
        <h2 className="text-[#313E51] text-[40px] font-semibold">
          You scored...
        </h2>
      </div>
      <div className="result-container w-[327px] mt-[40px] bg-button rounded-[12px] shadow-button-light py-[32px] px-[32px]">
        <div className="access flex flex-row gap-[16px] items-center justify-center ">
          <div className="w-[40px] h-[40px] rounded-[4px] p-[5.71px] bg-access-light">
            <img
              src={accessibility}
              alt="accessibility icon"
              className="w-[28.571px] h-[28.571px]"
            />
          </div>
          <p className="font-semibold text-[#313E51] text-[18px]">
            Accessibility
          </p>
        </div>
        <p className="text-[88px] text-center text-[#313E51] font-semibold mt-[16px]">
          {point}
        </p>
        <p className="text-[18px] text-[#313E51] font-normal text-center">
          out of 10
        </p>
      </div>
      <button
        onClick={playAgain}
        className="w-[327px] text-[#fff] text-[18px] text-medium py-[19px] rounded-[12px] bg-submit shadow-button-light mt-[12px] mb-[100px]"
      >
        Play Again
      </button>
    </div>
  );
};

export default Result;
