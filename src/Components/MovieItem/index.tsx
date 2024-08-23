import { useEffect, useState } from "react";
import {
  MovieType,
  SearchResponseType,
  TVType,
} from "../../Utility/APIHandler";
import Styles from "./styles.module.scss";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

export default function MovieItem({
  movie,
  tv,
  search,
}: {
  movie: MovieType | null;
  tv: TVType | null;
  search: SearchResponseType | null;
}) {
  console.log("Movie");

  console.log(movie);
  console.log(tv);
  console.log(search);

  const [image, setImage] = useState(Logo);

  useEffect(() => {
    setTimeout(
      () =>
        setImage(
          "https://image.tmdb.org/t/p/w342" +
            (movie || tv || search)?.poster_path
        ),
      10
    );
  }, []);

  return (
    <Link
      to={`/detail?type=${search?.media_type || "movie"}&id=${
        movie?.id || tv?.id || search?.id
      }`}
      className={Styles.movie}
    >
      <img src={image} alt="Cover" className={Styles.cover} />

      <div className={Styles.details}>
        <h3 className={Styles.title}>
          {movie?.title || tv?.name || search?.name}
        </h3>
        <span className={Styles.year}>
          سال{" "}
          {(movie?.release_date || (tv || search)?.first_air_date)?.slice(0, 4)}
        </span>
        <span className={Styles.rate}>
          {(movie || tv || search)?.vote_average?.toFixed(1)} ⭐
        </span>
      </div>
    </Link>
  );
}
