import React, {useState} from "react";
import { QuestionProps } from "./interface";
import { motion } from "framer-motion";

export const Question: React.FC<QuestionProps> = ({
  setQuestion,
  index,
  ref,
  question,
  seeAnswer,
  setSeeAnswer,
  setCurrentAnswer,
}) => {
  const [rotateArrow, setRotateArrow] = useState({ rotate: 0 });
  const [fadeInAnswer, setFadeInAnswer] = useState({ opacity: 0 });
  return (
    <section className="faqContent mt-3 col-sm-12 p-1">
      <h4
        className="text-dark"
        onClick={(e) => {
          setCurrentAnswer(String(index));
          setSeeAnswer(!seeAnswer);
          rotateArrow.rotate == 0
            ? setRotateArrow({ rotate: 180 })
            : setRotateArrow({ rotate: 0 });
          fadeInAnswer.opacity == 0
            ? setFadeInAnswer({ opacity: 1 })
            : setFadeInAnswer({ opacity: 0 });
        }}
      >
        {question.question}{" "}
        <motion.span
          animate={rotateArrow}
          className="expand-block d-inline-block"
        >
          <span>▼</span>
        </motion.span>
      </h4>
      <motion.div
        animate={fadeInAnswer}
        transition={{ fade: "fadeOut", duration: 0.4 }}
        key={index}
        ref={ref}
        className="answer"
        style={setQuestion(seeAnswer, String(index))}
      >
        <p className="text-right p-2 m-2"> {question.answer}</p>
      </motion.div>
    </section>
  );
};
