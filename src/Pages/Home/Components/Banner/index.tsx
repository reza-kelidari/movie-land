import { useEffect, useState } from "react";
import Styles from "./styles.module.scss";
import LodingBanner from "../../../../assets/LoadingBanner.svg";
import Next from "../../../../Assets/Next.tsx";
import Previus from "../../../../Assets/Previous.tsx";
import { Link } from "react-router-dom";
import { BannerProps } from "./types.ts";

/**
 * Banner Component for Home page's top Section
 *
 * This component renders a big banner
 *
 * @param content - An array that contains Movies
 * @returns {JSX.Element}
 */
export default function Banner({ content }: BannerProps): JSX.Element {
  /**
   * Declaring Page number state
   */
  const [page, setPage] = useState<number>(0);

  /**
   * Declaring Banner image, by now just a placeholder
   */
  const [image, setImage] = useState<string>(LodingBanner);

  /**
   * @effect that adds a timeount for changing Banner image automatically
   * every 10s
   *
   * This @effect runs everytime page number changes
   */
  useEffect(() => {
    const timeoutId = setTimeout(
      () =>
        setPage((prevState) =>
          prevState < content.length - 1 ? prevState + 1 : 0
        ),
      10000
    );

    /**
     * Removing timeout when component is not shown
     */
    return () => clearTimeout(timeoutId);
  }, [page]);

  /**
   * @effect that sets Banner image after 5ms, every time that Page number
   * changes
   *
   * This @effect runs everytime page number changes
   */
  useEffect(() => {
    setImage(LodingBanner);
    const timeoutId = setTimeout(
      () =>
        setImage(
          "https://image.tmdb.org/t/p/w1280" + content[page].backdrop_path
        ),
      5
    );

    /**
     * Removing timeout when component is not shown
     */
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
            /**
             * Since whole component is inside of <Link>, when user
             * clicks on it, it's goes to another page, but this button
             * just should change page number, so preventing default used
             */
            event.preventDefault();
            setPage((prevState) => (prevState > 0 ? prevState - 1 : 4));
          }}
        >
          {<Previus />}
        </button>
        <button
          onClick={(event) => {
            /**
             * Like previous one
             */
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
