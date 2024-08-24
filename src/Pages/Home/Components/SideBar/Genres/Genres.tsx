import { useEffect, useState } from "react";
import Styles from "../styles.module.scss";
import getContent from "../../../../../API";
import { Type } from "../../../../../API/types";
import { GenreInteType, GenresListType } from "./types";
import { Link } from "react-router-dom";

/**
 * Genres Component for Home page side bar
 *
 * This component resnders a list of genres
 *
 * @returns {JSX.Element}
 */
export default function Genres(): JSX.Element {
  /**
   * Genres list state that maintains an array of Movies genres
   * and used for listing them
   */
  const [genres, setGenres] = useState<GenresListType>([]);

  /**
   * @effect that receives Genres from APIHandler's getContent
   * method, and inserts them in Genres state using setGenres method
   */
  useEffect(() => {
    getContent(Type.Genre).then((response) => setGenres(response.genres));
  }, []);

  return (
    <div className={Styles.genres}>
      <h3 className={Styles.title}>دسته بندی ها</h3>

      <div className={Styles.list}>
        {genres.map((genre) => (
          <GenreItem id={genre.id} name={genre.name} key={genre.id} />
        ))}
      </div>
    </div>
  );
}

/**
 *
 * @param name - Genre name
 * @returns {JSX.Element}
 */
function GenreItem({ id, name }: GenreInteType): JSX.Element {
  return (
    <Link to={`/genre?id=${id}`} className={Styles.genre}>
      {name}
    </Link>
  );
}
