import { useState } from "react";

import styles from "./ArticlesWrapper.module.css";
import ArticleCard from "../ArticleCard/ArticleCard";

const ArticlesWrapper = () => {
  const [articles, setArticles] = useState([
    {
      text: "Kopos",
      imgUrl: "https://www.lrt.lt/img/2016/05/16/126233-855888-756x425.jpg",
    },
    {
      text: "Baltijos jura",
      imgUrl:
        "https://cdn3.onlithuania.com/content/uploads/sites/2/2022/07/DSC3719.jpg",
    },
    {
      text: "Traku pilis",
      imgUrl:
        "https://media.baltictimes.com/media/photos/151101_1374535502609957057e5eb_big.jpg",
    },
  ]);

  return (
    <div className={styles.main}>
      <ArticleCard text={articles[0].text} imgUrl={articles[0].imgUrl} />
      <ArticleCard text={articles[1].text} imgUrl={articles[1].imgUrl} />
      <ArticleCard text={articles[2].text} imgUrl={articles[2].imgUrl} />
    </div>
  );
};

export default ArticlesWrapper;

{
  /* <img src="https://www.lrt.lt/img/2016/05/16/126233-855888-756x425.jpg" /> */
}
{
  /* <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4> */
}
