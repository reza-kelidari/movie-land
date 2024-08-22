import { useEffect, useState } from "react";
import { MovieType } from "../../Utility/APIHandler";
import Styles from "./styles.module.scss";
import Logo from "../../assets/Logo.svg";

export default function Movie({ info }: { info: MovieType }) {
  const [image, setImage] = useState(Logo);

  useEffect(() => {
    setTimeout(
      () => setImage("https://image.tmdb.org/t/p/w342" + info.poster_path),
      10
    );
  }, []);

  return (
    <div className={Styles.movie}>
      <img src={image} alt="Cover" className={Styles.cover} />

      <div className={Styles.details}>
        <h3 className={Styles.title}>{info.title}</h3>
        <span className={Styles.year}>سال {info.release_date.slice(0, 4)}</span>
        <span className={Styles.rate}>{info.vote_average.toFixed(1)} ⭐</span>
      </div>
    </div>
  );
}
