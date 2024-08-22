import { useEffect, useState } from "react";
import { MovieType } from "../../../../Utility/APIHandler";
import Styles from "./styles.module.scss";
import Logo from "../../../../assets/Banner_Loading.svg";
import Next from "../../../../Assets/Next.tsx";
import Previus from "../../../../Assets/Previus.tsx";
import { Link } from "react-router-dom";

export default function Banner({ content }: { content: Array<MovieType> }) {
  const [page, setPage] = useState<number>(0);
  const [image, setImage] = useState<string>(Logo);

  useEffect(() => {
    const timeoutId = setTimeout(
      () =>
        setPage((prevState) =>
          prevState < content.length - 1 ? prevState + 1 : 0
        ),
      10000
    );

    return () => clearInterval(timeoutId);
  }, [page]);

  useEffect(() => {
    setImage(Logo);
    const timeoutId = setTimeout(
      () =>
        setImage(
          "https://image.tmdb.org/t/p/w1280" + content[page].backdrop_path
        ),
      50
    );

    return () => clearTimeout(timeoutId);
  }, [page]);

  return (
    <Link
      to={`/detail?type=movie&id=${content[page].id}`}
      className={Styles.banner}
    >
      <img src={image} alt="Backdrop" className={Styles.backdrop} />
      <div className={Styles.details}>
        <h1 className={Styles.title}>{content[page].title}</h1>
        <p className={Styles.desc}>{content[page].overview}</p>
      </div>
      <div className={Styles.navigation}>
        <button
          onClick={(event) => {
            event.preventDefault();
            setPage((prevState) => (prevState > 0 ? prevState - 1 : 4));
          }}
        >
          {<Previus />}
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            setPage((prevState) =>
              prevState < content.length - 1 ? prevState + 1 : 0
            );
          }}
        >
          {<Next />}
        </button>
      </div>
    </Link>
  );
}
