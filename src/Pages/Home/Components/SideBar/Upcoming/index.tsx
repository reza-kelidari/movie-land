import { useEffect, useState } from "react";
import Styles from "../styles.module.scss";
import getContent from "../../../../../API";
import { Type } from "../../../../../API/types";
import { MovieType } from "../../../../../API/Movie/types";
import LoadingBanner from "../../../../../Assets/LoadingBanner.svg";
import { Link } from "react-router-dom";
import { UpcomingListType } from "./types";
import { imageURL } from "../../../../../Utility/Statics";

/**
 * Popular component for Home page side bar
 *
 * This components renders a list of top movies received from
 * APIHandler's getContent method
 *
 * @returns {JSX.Element}
 */
export default function Upcoming(): JSX.Element {
  /**
   * Upcoming list state that maintains an array of Upcoming movies
   * and used for listing them
   */
  const [upcoming, setUpcoming] = useState<UpcomingListType>([]);

  /**
   * @effect that receives Upcoming contents from APIHandler's
   * getContent method, and inserts items 0 ~ 15 of that in movies
   * state using setMovies method
   */
  useEffect(() => {
    getContent(Type.Upcoming).then((response) =>
      setUpcoming(response.results.slice(0, 7))
    );
  }, []);

  return (
    <div className={Styles.upcoming}>
      <h3 className={Styles.title}>منتظر اکران</h3>
      <div className={Styles.list}>
        {upcoming.map((item, index) => (
          <Item movie={item} key={index} />
        ))}
      </div>
    </div>
  );
}

/**
 * Item Component for Upcoming Component
 *
 * This component renders a element that contains media poster,
 * name, year, and average vote
 *
 * @param movie - Details of movie
 * @returns {JSX.Element}
 */
function Item({ movie }: { movie: MovieType }): JSX.Element {
  /**
   * Defining item image, by now just a placeholder
   */
  const [image, setImage] = useState(LoadingBanner);

  /**
   * @effect that sets Media poster after 5ms
   */
  useEffect(() => {
    setTimeout(() => setImage(imageURL + "w92" + movie.poster_path), 5);
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
