import styles from "./ArticleCard.module.css";

const ArticleCard = () => {
  return (
    <div className={styles.main}>
      <img src="https://www.lrt.lt/img/2016/05/16/126233-855888-756x425.jpg" />
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
    </div>
  );
};

export default ArticleCard;
