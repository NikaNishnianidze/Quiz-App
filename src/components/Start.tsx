import { Link } from "react-router-dom";
import data from "../data.json";

interface StartProps {
  darkMode: boolean;
}

const Start: React.FC<StartProps> = ({ darkMode }) => {
  return (
    <>
      <div className="main px-[24px] ">
        <div className="mt-[32px]">
          <h1
            className={`font-light text-[40px] text-[#313E51] dark:text-[#fff] `}
          >
            Welcome to the
          </h1>
          <h2 className="font-semibold text-[40px] text-[#313E51]">
            Frontend Quiz!
          </h2>
          <p className="text-[14px] text-[#626C7F] mt-[16px] italic">
            Pick a subject to get started.
          </p>
        </div>
        <div className="options mt-[40px] flex flex-col gap-[12px] mb-[250px]">
          {data.map((item, index) => (
            <div key={index} className="option-item flex flex-row">
              <button className="flex flex-row items-center gap-[16px] w-[327px] pl-[12px] py-[12px] bg-button rounded-[12px]">
                <img src={item.icon} alt="item icon" />
                <Link to={item.title}>{item.title}</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Start;
