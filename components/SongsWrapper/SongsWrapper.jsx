import SongCard from "../SongCard/SongCard";
import styles from "./SongsWrapper.module.css";

const SongsWrapper = ({ songs }) => {
  return (
    <div className={styles.container}>
      {songs &&
        songs.map((song) => (
          <SongCard
            key={song.id}
            title={song.title}
            artist={song.artist}
            releaseYear={song.release_year}
            youtubeLink={song.youtube_link}
          />
        ))}
    </div>
  );
};

export default SongsWrapper;
