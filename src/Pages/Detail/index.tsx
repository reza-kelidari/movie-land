import { useLocation, useNavigate } from "react-router-dom";
import Styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import {
  Credit,
  CrewJob,
  DetailType,
  getCredits,
  getMovie,
  MovieDetail,
  TVDetail,
} from "../../Utility/APIHandler";
import Logo from "../../assets/Banner_Loading.svg";
import Company from "./Components/Company";
import Cast from "./Components/Cast";

export default function Detail() {
  const params = useLocation();
  const navigate = useNavigate();
  const paramsHandler = new URLSearchParams(params.search);
  if (!paramsHandler.has("type") || !paramsHandler.has("id")) {
    navigate("/");
  }

  const contentID = paramsHandler.get("id") as any as number;
  const contentType =
    paramsHandler.get("type") === "movie" ? DetailType.Movie : DetailType.TV;

  const [movie, setMovie] = useState<MovieDetail & TVDetail>();
  const [credit, setCredit] = useState<Credit>();

  const [background, setBackground] = useState<string>();
  const [cover, setCover] = useState<string>();

  useEffect(() => {
    getMovie(contentID, contentType).then((response) =>
      setMovie(response as any)
    );

    getCredits(contentID, contentType).then((response) => setCredit(response));
  }, []);

  useEffect(() => {
    setBackground(Logo);
    setCover(Logo);

    setTimeout(() => {
      setBackground("https://image.tmdb.org/t/p/w1280" + movie?.backdrop_path);
      setCover("https://image.tmdb.org/t/p/w342" + movie?.poster_path);
    }, 10);
  }, [movie]);

  if (!movie) {
    return <div className={Styles.loading}>لطفا صبر کنید</div>;
  } else {
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
