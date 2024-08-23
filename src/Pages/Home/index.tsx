import { useContext, useEffect, useState } from "react";
import Styles from "./styles.module.scss";
import getContent, {
  MovieType,
  searchMedia,
  SearchResponseType,
  Type,
} from "../../Utility/APIHandler";
import Banner from "./Components/Banner";
import Populars from "./Components/SideBar/Popular";
import Genres from "./Components/SideBar/Genres";
import TopRated from "./Components/TopRated";
import SearchContext from "../../Provider/SearchProvider";
import MovieItem from "../../Components/MovieItem";

export default function Home() {
  const [content, setContent] = useState<Array<MovieType>>([]);
  const { search } = useContext(SearchContext);
  const [searchResult, setSearchResult] = useState<Array<SearchResponseType>>(
    []
  );

  useEffect(() => {
    getContent(Type.Trending).then((response) =>
      setContent(response.results.slice(0, 5))
    );
  }, []);

  useEffect(() => {
    searchMedia(search).then((response) => {
      setSearchResult(response.results);
    });
  }, [search]);

  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);

  if (content.length === 0)
    return <div className={Styles.loading}>لطفا صبر کنید</div>;
  else if (search.length === 0) {
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
  } else {
    return (
      <div className={Styles.searchResult}>
        {searchResult.map((item) => (
          <MovieItem key={item.id} search={item} movie={null} tv={null} />
        ))}
      </div>
    );
  }
}
