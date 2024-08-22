import { useEffect, useState } from "react";
import Styles from "./styles.module.scss";
import getContent, { MovieType, Type } from "../../../../Utility/APIHandler";

export default function Popular() {
  const [populars, setPopulars] = useState<Array<MovieType>>([]);

  useEffect(() => {
    getContent(Type.Popular).then((response) =>
      setPopulars(response.results.slice(0, 9))
    );
  }, []);

  return (
    <div className={Styles.populars}>
      <h3 className={Styles.title}>پرطرفدار 🔥</h3>
      <div className={Styles.list}>
        {populars.map((item, index) => (
          <Item movie={item} key={index} />
        ))}
      </div>
    </div>
  );
}

function Item({ movie }: { movie: MovieType }) {
  return (
    <div className={Styles.movie}>
      <img
        src={"https://image.tmdb.org/t/p/w92" + movie.poster_path}
        alt="Cover"
        className={Styles.cover}
      />
      <div className={Styles.details}>
        <h3 className={Styles.title}>{movie.title}</h3>
        <span className={Styles.year}>
          سال {movie.release_date.slice(0, 4)}
        </span>
        <span className={Styles.point}>{movie.vote_average.toFixed(1)} ⭐</span>
      </div>
    </div>
  );
}
