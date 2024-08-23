import { useEffect, useState } from "react";
import Styles from "./styles.module.scss";
import getContent, { MovieType, Type } from "../../../../Utility/APIHandler";
import Movie from "../../../../Components/Movie";

export default function TopRated() {
  const [movies, setMovies] = useState<Array<MovieType>>([]);

  useEffect(() => {
    getContent(Type.Popular).then((response) =>
      setMovies(response.results.slice(0, 16))
    );
  }, []);

  return (
    <section className={Styles.topRated}>
      <h1 className={Styles.title}>
        برترین ها 👑 <span className={Styles.small}>در سینما ها</span>
      </h1>

      <div className={Styles.list}>
        {movies.map((item) => (
          <Movie info={item} />
        ))}
      </div>
    </section>
  );
}
