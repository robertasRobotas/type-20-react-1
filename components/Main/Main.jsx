import styles from "./Main.module.css";
import ArticlesWrapper from "../ArticlesWrapper/ArticlesWrapper";
import QuestionsWrapper from "../QuestionsWrapper/QuestionsWrapper";
import SongsWrapper from "../SongsWrapper/SongsWrapper";

const Main = ({ songs }) => {
  return (
    <main className={styles.main}>
      {/* <ArticlesWrapper /> */}
      {/* <QuestionsWrapper /> */}
      <SongsWrapper songs={songs} />
    </main>
  );
};

export default Main;
