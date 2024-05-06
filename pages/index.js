import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import axios from "axios";

const MainPage = () => {
  const [songs, setSongs] = useState(null);

  const fetchSongs = async () => {
    const response = await axios.get(
      "https://6634784b9bb0df2359a19c6e.mockapi.io/songs"
    );

    console.log(response.data);

    setSongs(response.data);
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  const links = [{ title: "about", link: "www.about.lt" }];

  return (
    <div className={styles.container}>
      <Header links={links} />
      <Main songs={songs} />
      <Footer />
    </div>
  );
};

export default MainPage;
