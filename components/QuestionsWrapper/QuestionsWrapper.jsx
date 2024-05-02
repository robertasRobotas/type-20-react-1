import { useState } from "react";
import Question from "../Question/Question";
import styles from "./QuestionsWrapper.module.css";

const QuestionsWrapper = () => {
  const [question, setQuestion] = useState([
    { question: "Be rankų, be kojų, o gražiai piešia.", answer: "Šaltis" },
    { question: "Čia yra, čia nėra, bet niekuomet nežūna.", answer: "Mėnulis" },
    { question: "Dieną naktį eina, niekad nesustoja.", answer: "Upė" },
    { question: "Juoda karvė visus gyvius pargriovė.", answer: "Naktis" },
    { question: "Meška bėga, visa giria dunda.", answer: "Vėjas" },
  ]);

  return (
    <div className={styles.container}>
      {question.map((question) => {
        return (
          <Question question={question.question} answer={question.answer} />
        );
      })}
    </div>
  );
};

export default QuestionsWrapper;
