import React, {useState, createRef, useEffect} from "react";
import "./style/style.scss";
import axios from "axios";
import { Question } from "./Question";
import faqPic from "../../assets/question.svg";

export const FrequentlyAsked: React.FC = () => {
  // Initiating the questions array.
  const [faqState, setFaqState] = useState([]);
  // Decides whether or not to show the answer.
  const [seeAnswer, setSeeAnswer] = useState(false);
  // Current answer based on the current index of the questions array.
  const [currentAnswer, setCurrentAnswer] = useState("");
  // Makes an API call from the server.
  const getQuestions = async () => {
    try {
      const request = axios.get("http://173.255.115.65/getQA");
      const response = await (await request).data;
      console.log(response);
    } catch (error) {
      throw new Error(error);
    }
  };
  // Initiating Div element ref.
  const ref = createRef<HTMLDivElement>();
  // if boolParam !== falsy, and param matches currentAnswer(index), show question.
  const setQuestion = (boolParam: boolean, param: string) => {
    console.log(boolParam, param, currentAnswer);
    if (boolParam && currentAnswer === param) {
      return { display: "block" };
    } else {
      return { display: "none" };
    }
  };
  // Before component first render it makes an API Call
  useEffect(() => {
    getQuestions();
    return () => {
      getQuestions();
    };
  }, []);

  // demo start
  const question = {
    question: "ddddd",
    answer: "xxxx",
  };
  const array = Array(4).fill(question);
  // demo end
  return (
    <div className="faqMain container ">
      <div className="faqHeader w-100">
        <h1 className="p-1">אז אנחנו מניחים שיש לכם קצת שאלות....</h1>
        <span className="p-1">חשבנו על כמה מהן וענינו לכם מראש ;)</span>
      </div>
      {array.map((question, index) => (
        <div className="">
          <Question
            currentAnswer={currentAnswer}
            setCurrentAnswer={setCurrentAnswer}
            setQuestion={setQuestion}
            question={question}
            seeAnswer={seeAnswer}
            setSeeAnswer={setSeeAnswer}
            index={index}
            ref={ref}
          />
        </div>
      ))}
      <div className="faqBottom">
        <img
          className="mr-auto ml-5"
          style={{ height: "40vh", position: "fixed", zIndex: -1}}
          src={faqPic}
          alt="frequentlyAsked"
        />
      </div>
    </div>
  );
};
