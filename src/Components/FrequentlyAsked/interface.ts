export interface QuestionProps {
    setQuestion: (
      boolParam: boolean,
      param: string
    ) => {
      display: string;
    };
    setCurrentAnswer: React.Dispatch<React.SetStateAction<string>>;
    currentAnswer: string;
    index: number;
    ref: React.RefObject<HTMLDivElement>;
    question: {
      question: string;
      answer: string;
    };
    seeAnswer: boolean;
    setSeeAnswer: React.Dispatch<React.SetStateAction<boolean>>;
  }