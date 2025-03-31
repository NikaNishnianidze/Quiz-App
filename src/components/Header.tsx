import sunIconDark from "../../public/assets/icon-sun-dark.svg";
import moonIconDark from "../../public/assets/icon-moon-dark.svg";
import sunIconLight from "../../public/assets/icon-sun-light.svg";
import moonIconLight from "../../public/assets/icon-moon-light.svg";
import accessIcon from "../../public/assets/icon-accessibility.svg";
import { useState } from "react";
import { useLocation } from "react-router-dom";

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
    <div className="main-start px-[24px] pt-[26px] ">
      <div className="header flex flex-row justify-between items-center">
        <div className="access flex flex-row items-center gap-[16px]">
          {!isStartPage && <img src={accessIcon} alt="accessibility icon" />}
          {!isStartPage && (
            <p className="font-medium text-[18px] text-[#313E51]">
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
          <img src={darkMode ? moonIconLight : moonIconDark} alt="moon icon" />
        </div>
      </div>
    </div>
  );
}
