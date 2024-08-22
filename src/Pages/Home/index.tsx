import { useEffect, useState } from "react";
import Styles from "./styles.module.scss";
import getContent, { MovieType, Type } from "../../Utility/APIHandler";
import Banner from "./Components/Banner";
import Populars from "./Components/SideBar/Popular";
import Genres from "./Components/SideBar/Genres";
import TopRated from "./Components/TopRated";

export default function Home() {
  const [content, setContent] = useState<Array<MovieType>>([]);

  useEffect(() => {
    getContent(Type.Trending).then((response) =>
      setContent(response.results.slice(0, 5))
    );
  }, []);

  if (content.length === 0)
    return <div className={Styles.loading}>لطفا صبر کنید</div>;

  return (
    <>
      <div className={Styles.top}>
        <Banner content={content} />
      </div>
      <main className={Styles.content}>
        <aside className={Styles.sideBar}>
          <div className={Styles.popular}>
            <Populars />
          </div>

          <div className={Styles.category}>
            <Genres />
          </div>
        </aside>

        <TopRated />
      </main>
    </>
  );
}
