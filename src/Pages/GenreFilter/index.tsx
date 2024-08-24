import Styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getGenre } from "../../API/Genre";
import MovieItem from "../../Components/MovieItem";
import { GenresResponse } from "../../API/Genre/types";
import getContent from "../../API";
import { Type } from "../../API/types";

/**
 * Genre Filter page
 *
 * this component renders a list of movies based on given
 * genre id
 *
 * @returns {JSX.Element}
 */
export default function GenreFilter(): JSX.Element {
  /**
   * Get the current URL parameters
   */
  const params = useLocation();

  const navigate = useNavigate();
  const paramsHandler = new URLSearchParams(params.search);

  /**
   * Check if the required parameters are present in the URL
   * If not, redirect to the home page
   */
  if (!paramsHandler.get("id")) {
    navigate("/");
  }

  /**
   * Extract the genre ID and type from the URL parameters
   */
  const genreID: number = parseInt(paramsHandler.get("id") ?? "0");

  /**
   * Declaring movies list state, ang genre name
   */
  const [movies, setMovies] = useState<Array<GenresResponse>>([]);
  const [genreName, setGenreName] = useState<string>("");

  /**
   * @effect that receives movies list from APIHandler's getGenre
   * method, and inserts that to movies state using setMovie method
   */
  useEffect(() => {
    getContent(Type.Genre).then((response) => {
      /**
       * Finding genre by it's id
       */
      const genre = response.genres.filter((item) => item.id === genreID)[0];

      /**
       * Declaring name of the genre
       */
      setGenreName(genre.name);
    });

    getGenre(genreID).then((response) => setMovies(response.results));
  }, []);

  /**
   * Show loading if movies list still not loaded
   */
  if (movies.length === 0) {
    return <div className={Styles.loading}>لطفا صبر کنید...</div>;
  } else {
    /**
     *Else, show the content
     */
    return (
      <div className={Styles.moviesFilter}>
        <h1 className={Styles.title}>برترین فیلم های ژانر {genreName}</h1>
        <div className={Styles.moviesList}>
          {movies.map((item) => (
            <MovieItem filter={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}
