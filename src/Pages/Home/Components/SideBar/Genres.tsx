import { useEffect, useState } from "react";
import Styles from "./styles.module.scss";
import { Genre, getGenres } from "../../../../Utility/APIHandler";

export default function Genres() {
  const [genres, setGenres] = useState<Array<Genre>>([]);

  useEffect(() => {
    getGenres().then((response) => setGenres(response.genres));
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

function GenreItem({ id, name }: { id: number; name: string }) {
  return <div className={Styles.genre}>{name}</div>;
}
