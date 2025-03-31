import { useParams } from "react-router-dom";
import data from "../data.json";

const Quiz = () => {
  const { pathName } = useParams();
  const quiz = data.find((quiz) => quiz.title == pathName);

  return <h1>{quiz?.title}</h1>;
};

export default Quiz;
