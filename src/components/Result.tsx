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
      <div className="text mt-[32px] w-[327px] tb:w-[640px] tb:mt-[49px]">
        <h1 className="text-[#313E51] text-[40px] font-light dark:text-[#fff] tb:text-[64px]">
          Quiz completed
        </h1>
        <h2 className="text-[#313E51] text-[40px] font-semibold dark:text-[#fff] tb:text-[64px]">
          You scored...
        </h2>
      </div>
      <div className="result-container w-[327px] mt-[40px] bg-button rounded-[12px] shadow-button-light py-[32px] px-[32px] dark:bg-range-input dark:shadow-button-dark tb:w-[640px] tb:py-[48px] tb:px-[48px] tb:mt-[64px]">
        <div className="access flex flex-row gap-[16px] items-center justify-center tb:gap-[24px]">
          <div className="w-[40px] h-[40px] rounded-[4px] p-[5.71px] bg-access-light tb:w-[56px] tb:h-[56px] tb:p-[8px]">
            <img
              src={accessibility}
              alt="accessibility icon"
              className="w-[28.571px] h-[28.571px] tb:w-[40px] tb:h-[40px]"
            />
          </div>
          <p className="font-semibold text-[#313E51] text-[18px] dark:text-[#fff] tb:text-[28px]">
            Accessibility
          </p>
        </div>
        <p className="text-[88px] text-center text-[#313E51] font-semibold mt-[16px] dark:text-[#fff] tb:mt-[40px] tb:text-[144px]">
          {point}
        </p>
        <p className="text-[18px] text-[#313E51] font-normal text-center dark:text-[#ABC1E1] tb:mt-[16px] tb:text-[24px]">
          out of 10
        </p>
      </div>
      <button
        onClick={playAgain}
        className="w-[327px] text-[#fff] text-[18px] text-medium py-[19px] rounded-[12px] bg-submit shadow-button-light mt-[12px] mb-[100px] dark:shadow-button-dark tb:mt-[32px] tb:w-[640px]"
      >
        Play Again
      </button>
    </div>
  );
};

export default Result;
