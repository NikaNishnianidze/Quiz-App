import { Link } from "react-router-dom";
import data from "../data.json";

interface StartProps {
  darkMode: boolean;
}

const Start: React.FC<StartProps> = ({ darkMode }) => {
  return (
    <>
      <div className="main px-[24px] flex flex-col items-center">
        <div className="mt-[32px] w-[327px] flex flex-col items-start tb:w-[640px] tb:mt-[65px]">
          <h1
            className={`font-light text-[40px]  text-[#313E51] dark:text-[#fff] tb:text-[64px] `}
          >
            Welcome to the
          </h1>
          <h2 className="font-semibold text-[40px] text-[#313E51] dark:text-[#fff] tb:text-[64px]">
            Frontend Quiz!
          </h2>
          <p className="text-[14px] text-[#626C7F] mt-[16px] italic dark:text-[#ABC1E1] tb:text-[20px]">
            Pick a subject to get started.
          </p>
        </div>
        <div className="options mt-[40px] flex flex-col gap-[12px] pb-[250px] tb:mt-[64px]">
          {data.map((item, index) => (
            <div key={index} className="option-item flex flex-row">
              <button className="flex flex-row items-center gap-[16px] w-[327px] pl-[12px] py-[12px] bg-button rounded-[12px] shadow-button-light dark:bg-button-dark dark:shadow-button-dark tb:w-[640px] ">
                <div className="image-box w-[40px] h-[40px] bg-image rounded-[6px] p-[5.71px]">
                  <img src={item.icon} alt="item icon" />
                </div>

                <Link
                  to={item.title}
                  className="text-[#313E51] text-[28px] font-medium dark:text-[#fff]"
                >
                  {item.title}
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Start;
