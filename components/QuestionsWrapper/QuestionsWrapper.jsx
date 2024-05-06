import { useState } from "react";
import Question from "../Question/Question";
import styles from "./QuestionsWrapper.module.css";

const QuestionsWrapper = () => {
  const [question, setQuestion] = useState([
    {
      id: 1,
      question: "Be rankų, be kojų, o gražiai piešia.",
      answer: "Šaltis",
    },
    {
      id: 2,
      question: "Čia yra, čia nėra, bet niekuomet nežūna.",
      answer: "Mėnulis",
    },
    { id: 3, question: "Dieną naktį eina, niekad nesustoja.", answer: "Upė" },
    {
      id: 4,
      question: "Juoda karvė visus gyvius pargriovė.",
      answer: "Naktis",
    },
    { id: 5, question: "Meška bėga, visa giria dunda.", answer: "Vėjas" },
  ]);

  return (
    <div className={styles.container}>
      {question.map((question) => {
        return (
          <Question
            key={question.id}
            question={question.question}
            answer={question.answer}
          />
        );
      })}
    </div>
  );
};

export default QuestionsWrapper;
