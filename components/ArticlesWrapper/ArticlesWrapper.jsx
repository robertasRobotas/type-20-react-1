import styles from "./ArticlesWrapper.module.css";
import ArticleCard from "../ArticleCard/ArticleCard";

const ArticlesWrapper = () => {
  return (
    <div className={styles.main}>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  );
};

export default ArticlesWrapper;
