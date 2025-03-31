import sunIconDark from "../../public/assets/images/icon-sun-dark.svg";
import moonIconDark from "../../public/assets/images/icon-moon-dark.svg";
import sunIconLight from "../../public/assets/images/icon-sun-light.svg";
import moonIconLight from "../../public/assets/images/icon-moon-light.svg";
import accessIcon from "../../public/assets/images/icon-accessibility.svg";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Start from "./Start";

export default function Header() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const location = useLocation();

  const isStartPage = location.pathname === "/";

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);

    if (!darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };
  return (
    <>
      <div className="main-start px-[24px] py-[16px] ">
        <div className="header flex flex-row justify-between items-center">
          <div className="access flex flex-row items-center gap-[16px]">
            {!isStartPage && (
              <div className="w-[40px] h-[40px] rounded-[4px] p-[5.71px] bg-access-light">
                <img src={accessIcon} alt="accessibility icon" />
              </div>
            )}
            {!isStartPage && (
              <p className="font-medium text-[18px] text-[#313E51] dark:text-[#fff]">
                Accessibility
              </p>
            )}
          </div>
          <div className="themes flex flex-row justify-end items-center gap-[8px]">
            <img src={darkMode ? sunIconLight : sunIconDark} alt="sun icon" />
            <label className="switch">
              <input
                type="checkbox"
                className="checkbox"
                onClick={toggleDarkMode}
              />
              <span className="slider"></span>
            </label>
            <img
              src={darkMode ? moonIconLight : moonIconDark}
              alt="moon icon"
            />
          </div>
        </div>
      </div>
    </>
  );
}
