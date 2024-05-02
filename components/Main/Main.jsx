import styles from "./Main.module.css";
import ArticlesWrapper from "../ArticlesWrapper/ArticlesWrapper";
import QuestionsWrapper from "../QuestionsWrapper/QuestionsWrapper";

const Main = () => {
  return (
    <main className={styles.main}>
      {/* <ArticlesWrapper /> */}
      <QuestionsWrapper />
    </main>
  );
};

export default Main;
