import { useEffect, useState } from "react";
import Styles from "./styles.module.scss";
import LoadingBanner from "../../assets/LoadingBanner.svg";
import { Link } from "react-router-dom";
import { MediaData, MovieItemProps } from "./types";
import { imageURL } from "../../Utility/Statics";

/**
 * MovieItem component, for Home page search results and TopRated component
 *
 * This component renders a element, that contains Media cover,
 * it's name, it's year and it's vote
 *
 * @param movie  - If it's a movie, data should passed throgh this
 * @param tv     - If it's a tv series, data should passed throgh this
 * @param search - If it's a search result, data should passed throgh this
 * @returns {JSX.Element}
 */
export default function MovieItem({
  movie,
  tv,
  search,
}: MovieItemProps): JSX.Element {
  /**
   * Defining Image, by now just a placeholder
   */
  const [image, setImage] = useState(LoadingBanner);

  /**
   * Definign media data
   *
   * Maybe not too clear and nice, but working clear and nice
   */
  const media: MediaData = {
    /**
     * The media unique identifier
     */
    id: movie?.id ?? tv?.id ?? search?.id ?? 0,

    /**
     * The media title
     */
    title: movie?.title ?? tv?.name ?? search?.name ?? search?.title ?? "",

    /**
     * Year when the media released
     */
    year:
      (
        movie?.release_date ??
        tv?.first_air_date ??
        search?.release_date ??
        search?.first_air_date
      )?.slice(0, 4) ?? "",

    /**
     * Average vote of the media
     */
    vote: (movie ?? tv ?? search)?.vote_average?.toFixed(1) ?? "",

    /**
     * Type of the media
     */
    type: search?.media_type ?? movie ? "movie" : "tv",

    /**
     * Poster path of the media
     */
    poster: (movie ?? tv ?? search)?.poster_path ?? "",
  };

  /**
   * @effect that sets Media poster after 5ms
   */
  useEffect(() => {
    const timeoutId = setTimeout(
      () => setImage(imageURL + "w342" + media.poster),
      5
    );

    /**
     * Clearing timeout method if component not showing
     */
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Link
      to={`/detail?type=${media.type}&id=${media.id}`}
      className={Styles.movie}
    >
      <img src={image} alt="Cover" className={Styles.cover} />

      <div className={Styles.details}>
        <h3 className={Styles.title}>{media.title}</h3>
        <span className={Styles.year}>سال {media.year}</span>
        <span className={Styles.rate}>{media.vote} ⭐</span>
      </div>
    </Link>
  );
}
