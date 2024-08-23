import { useEffect, useState } from "react";
import Styles from "./styles.module.scss";
import getContent, {
  MovieType,
  Type,
} from "../../../../Utility/APIHandler";
import Logo from "../../../../Assets/Logo.svg";
import { Link } from "react-router-dom";

export default function Popular() {
  const [upcoming, setUpcoming] = useState<Array<MovieType>>([]);

  useEffect(() => {
    getContent(Type.Upcoming).then((response) =>
      setUpcoming(response.results.slice(0, 7))
    );
  }, []);

  return (
    <div className={Styles.populars}>
      <h3 className={Styles.title}>پرطرفدار 🔥</h3>
      <div className={Styles.list}>
        {upcoming.map((item, index) => (
          <Item movie={item} key={index} />
        ))}
      </div>
    </div>
  );
}

function Item({ movie }: { movie: MovieType }) {
  const [image, setImage] = useState(Logo);

  useEffect(() => {
    setTimeout(
      () => setImage("https://image.tmdb.org/t/p/w92" + movie.poster_path),
      10
    );
  }, []);

  return (
    <Link to={`/detail?type=tv&id=${movie.id}`} className={Styles.movie}>
      <img src={image} alt="Cover" className={Styles.cover} />
      <div className={Styles.details}>
        <h3 className={Styles.title}>{movie.title}</h3>
        <span className={Styles.year}>
          سال {movie.release_date.slice(0, 4)}
        </span>
        <span className={Styles.point}>{movie.vote_average.toFixed(1)} ⭐</span>
      </div>
    </Link>
  );
}
