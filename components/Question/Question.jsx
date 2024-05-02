import { useState } from "react";
import styles from "./Question.module.css";

const Question = ({ question, answer }) => {
  const [isShowAnswer, setShowAnswer] = useState(false);

  return (
    <div className={styles.main}>
      <div>{question}</div>
      <button onClick={() => setShowAnswer(!isShowAnswer)}>
        {isShowAnswer ? <>hide answer</> : <>show answer</>}
      </button>
      {isShowAnswer && <>{answer}</>}
    </div>
  );
};

export default Question;
