import { useLocation, useNavigate } from "react-router-dom";
import Styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { CreditResponse, CrewJob, DetailType } from "../../API/Credits/types";
import { getCredits } from "../../API/Credits";
import { getMovie } from "../../API/Movie";
import LoadingBanner from "../../assets/LoadingBanner.svg";
import Company from "./Components/Company";
import Cast from "./Components/Cast";
import { MovieDetailType } from "./types";
import { imageURL } from "../../Utility/Statics";

/**
 * Detail page
 *
 * This component will render the home page, that contains Media details
 * and Actors ist
 *
 * @returns {JSX.Element}
 */
export default function Detail(): JSX.Element {
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
  if (!paramsHandler.get("type") || !paramsHandler.get("id")) {
    navigate("/");
  }

  /**
   * Extract the content ID and type from the URL parameters
   */
  const contentID: number = parseInt(paramsHandler.get("id") ?? "0");
  const contentType: DetailType =
    paramsHandler.get("type") === "movie" ? DetailType.Movie : DetailType.TV;

  /**
   * Defining movie details and credit list
   */
  const [movie, setMovie] = useState<MovieDetailType>();
  const [credit, setCredit] = useState<CreditResponse>();

  /**
   * Defining image state, by now just a placeholder
   */
  const [background, setBackground] = useState<string>(LoadingBanner);
  const [cover, setCover] = useState<string>(LoadingBanner);

  /**
   * @effect that receives Media data from APIHandler's getMovie method,
   * and inserts it in movie state using setMovie method
   *
   * It's also receives Credits data from APIHandler's getCredits method,
   * and inserts it in credit state using setCredit method
   */
  useEffect(() => {
    getMovie(contentID, contentType).then((response) =>
      setMovie(response as any)
    );

    getCredits(contentID, contentType).then((response) => setCredit(response));
  }, []);

  /**
   * @effect that sets Media poster after 5ms
   *
   * This @effect runs after movie state sets
   */
  useEffect(() => {
    setTimeout(() => {
      setBackground(imageURL + "w1280" + movie?.backdrop_path);
      setCover(imageURL + "w342" + movie?.poster_path);
    }, 5);
  }, [movie]);

  /**
   * Render the loading message if the movie data is not available
   */
  if (!movie) {
    return <div className={Styles.loading}>لطفا صبر کنید</div>;
  } else {
    /**
     * Else, render the detail page
     */
    return (
      <div className={Styles.detail}>
        <div className={Styles.topBar}>
          <img
            src={background}
            alt="Background"
            className={Styles.background}
          />

          <img src={cover} alt="Cover" className={Styles.cover} />

          <div className={Styles.info}>
            <div className={Styles.genres}>
              {movie.genres.map((genre) => (
                <span className={Styles.genre} key={genre.id}>
                  {genre.name}
                </span>
              ))}
            </div>

            <h1 className={Styles.title}>{movie.title || movie.name}</h1>
            <h3 className={Styles.subTitle}>{movie.tagline}</h3>
            <p className={Styles.desc}>{movie.overview}</p>

            <div className={Styles.companies}>
              {movie.production_companies.map((company) => (
                <Company company={company} key={company.id} />
              ))}
            </div>

            <div className={Styles.smallDetails}>
              <span className={Styles.vote}>
                {movie.vote_average.toFixed(1)} ⭐
              </span>

              <span className={Styles.year}>
                محصول سال{" "}
                {(movie.first_air_date || movie.release_date).slice(0, 4)}
              </span>

              <span className={Styles.directors}>
                <span className={Styles.title}>کارگردان (ها):</span>
                {credit?.crew
                  .filter(
                    (item) => item.known_for_department === CrewJob.Directing
                  )
                  .map((item) => (
                    <span className={Styles.director}>{item.name}</span>
                  ))}
              </span>
            </div>
          </div>
        </div>

        <div className={Styles.cast}>
          <div className={Styles.titleBar}>
            <h3 className={Styles.title}>بازیگران</h3>
          </div>

          <div className={Styles.list}>
            {credit?.cast.slice(0, 7).map((item) => (
              <Cast key={item.id} cast={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
