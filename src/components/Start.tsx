import { useParams } from "react-router-dom";
import Header from "./Header";

export default function Start() {
  const { pathName } = useParams();

  return (
    <>
      <Header />
      <div className="main">
        <div className="text mt-[32px]">
          <h1 className="text-[40px] font-light text-[#313E51]">
            Welcome to the
          </h1>
          <span>Frontend Quiz!</span>
        </div>
        <div className="options"></div>
      </div>
    </>
  );
}
