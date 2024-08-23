import { useContext, useEffect, useState } from "react";
import Styles from "./styles.module.scss";
import getContent from "../../API";
import { searchMedia } from "../../API/Search";
import { Type } from "../../API/types";
import Banner from "./Components/Banner";
import Upcoming from "./Components/SideBar/Upcoming";
import Genres from "./Components/SideBar/Genres/Genres";
import Popular from "./Components/Popular";
import SearchContext from "../../Provider/SearchProvider";
import MovieItem from "../../Components/MovieItem";
import { ContentType, SearchResultType } from "./types";

/**
 * Home Page
 *
 * This component will render the home page, that contains Top banner
 * and Main section
 * @returns {JSX.Element}
 */
export default function Home(): JSX.Element {
  /**
   * Content state that maintains an array of Trending movies and used
   * for listing them
   */
  const [content, setContent] = useState<ContentType>([]);

  /**
   * Search context that maintains Search query
   */
  const { search } = useContext(SearchContext);

  /**
   * SearchResult state that maintains an array of matched results with
   * Search query
   */
  const [searchResult, setSearchResult] = useState<SearchResultType>([]);

  /**
   * @effect that receives Trending contents from APIHandler's getContent
   * method, and inserts items 0 ~ 4 of that in content state using
   * setContent method
   */
  useEffect(() => {
    getContent(Type.Trending).then((response) =>
      setContent(response.results.slice(0, 5))
    );
  }, []);

  /**
   * @effect that receives Contents based on Search query from APIHandler's
   * searchMedia method, and inserts items in searchResult state using
   * setSearchResult method
   */
  useEffect(() => {
    /**
     * If user searched something, use that for fetching data from
     * server using APIHandler's searchMedia method, and insert results to
     * SearchResult state using setSearchResult method
     */
    if (search.length > 0)
      searchMedia(search).then((response) => {
        setSearchResult(response.results);
      });
    /**
     * Else, so user isn't searching something, then clear SearchResult
     * state using setSearchResult method
     */ else setSearchResult([]);
  }, [search]);

  /**
   * If content is still not loader from server, shows a Loading
   */
  if (content.length === 0)
    return <div className={Styles.loading}>لطفا صبر کنید</div>;
  else if (search.length === 0) {
    /**
     * Else, If user isn't searching something, renders Home page
     */
    return (
      <>
        <div className={Styles.top}>
          <Banner content={content} />
        </div>
        <main className={Styles.content}>
          <aside className={Styles.sideBar}>
            <div className={Styles.popular}>
              <Upcoming />
            </div>

            <div className={Styles.category}>
              <Genres />
            </div>
          </aside>

          <Popular />
        </main>
      </>
    );
  } else {
    /**
     * Else, user is searching something, so shows the result
     */
    return (
      <div className={Styles.searchResult}>
        {searchResult.map((item) => (
          <MovieItem key={item.id} search={item} />
        ))}
      </div>
    );
  }
}
