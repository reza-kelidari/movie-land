import { useEffect, useState } from "react";
import Styles from "./styles.module.scss";
import getContent from "../../../../API";
import { Type } from "../../../../API/types";
import MovieItem from "../../../../Components/MovieItem";
import { PopularListType } from "./types";

/**
 * Popular component, for Home page
 *
 * This components renders a list of top movies received from
 * APIHandler's getContent method
 * @returns {JSX.Element}
 */
export default function Popular(): JSX.Element {
  /**
   * Movies list state that maintains an array of Top Rated movies
   * and used for listing them
   */
  const [movies, setMovies] = useState<PopularListType>([]);

  /**
   * @effect that receives Popular contents from APIHandler's getContent
   * method, and inserts items 0 ~ 15 of that in Movies state using
   * setMovies method
   */
  useEffect(() => {
    getContent(Type.Popular).then((response) =>
      setMovies(response.results.slice(0, 16))
    );
  }, []);

  return (
    <section className={Styles.popular}>
      <h1 className={Styles.title}>
        پرطرفدار ها 👑 <span className={Styles.small}>در سینما ها</span>
      </h1>

      <div className={Styles.list}>
        {movies.map((item) => (
          <MovieItem movie={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
