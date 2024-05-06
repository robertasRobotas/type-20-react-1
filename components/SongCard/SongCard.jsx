import styles from "./SongCard.module.css";

const SongCard = ({ title, artist, releaseYear, youtubeLink }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <h4>{artist}</h4>
      <h4>{releaseYear}</h4>

      <iframe
        src={youtubeLink}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default SongCard;
