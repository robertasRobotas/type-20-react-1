import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header/Header";
import axios from "axios";
import styles from "./song.module.css";
import Link from "next/link";

const About = () => {
  const router = useRouter();

  const [song, setSong] = useState(null);

  const fetchSong = async () => {
    const result = await axios.get(
      `https://6634784b9bb0df2359a19c6e.mockapi.io/songs/${router.query.id}`
    );

    setSong(result.data);
  };

  useEffect(() => {
    router.query.id && fetchSong();
  }, [router.query.id]);

  return (
    <div>
      <Header />

      {song && (
        <div className={styles.contentWrapper}>
          <h1>{song.title}</h1>
          <h4>{song.artist}</h4>
          <h4>{song.release_year}</h4>

          <iframe
            src={song.youtube_link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <Link href="/">Go back</Link>
    </div>
  );
};

export default About;
