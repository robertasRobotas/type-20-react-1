import styles from "./ArticleCard.module.css";

const ArticleCard = ({ imgUrl, text }) => {
  return (
    <div className={styles.main}>
      <img src={imgUrl} />
      <h4>{text}</h4>
    </div>
  );
};

export default ArticleCard;
