import React from "react";
import "./style/style.scss";
import faqPic from "../../assets/questions.svg";
import { FaqContent } from './FaqContent';

export const FrequentlyAsked: React.FC = () => {
  document.title = "PortuTrack | שאלות ותשובות";

  return (
    <div className="faqMain">
      <div className="faqHeader">
        <h1 className="">אז אנחנו מניחים שיש לכם קצת שאלות....</h1>
        <span className="">אספנו כמה שאלות חשובות וענינו עליהן מראש</span>
      </div>
      <FaqContent/>
      <img src={faqPic} alt="frequentlyAsked" />
    </div>
  );
};

    
  