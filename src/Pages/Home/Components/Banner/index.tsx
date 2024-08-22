import { useEffect, useState } from "react";
import { Movie } from "../../../../Utility/APIHandler";
import Styles from "./styles.module.scss";
import Logo from "../../../../assets/Banner_Loading.svg";
import Next from "../../../../assets/Next.tsx";
import Previus from "../../../../assets/Previus.tsx";

interface Props {
  content: Array<Movie>;
}

export default function Banner({ content }: Props) {
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
    <div className={Styles.banner}>
      <img src={image} alt="Backdrop" className={Styles.backdrop} />
      <div className={Styles.details}>
        <h1 className={Styles.title}>{content[page].title}</h1>
        <p className={Styles.desc}>{content[page].overview}</p>
      </div>
      <div className={Styles.navigation}>
        <button
          onClick={() =>
            setPage((prevState) => (prevState > 0 ? prevState - 1 : 4))
          }
        >
          {<Previus />}
        </button>
        <button
          onClick={() =>
            setPage((prevState) =>
              prevState < content.length - 1 ? prevState + 1 : 0
            )
          }
        >
          {<Next />}
        </button>
      </div>
    </div>
  );
}
