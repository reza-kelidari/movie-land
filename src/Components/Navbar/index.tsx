import { useContext, useEffect, useState } from "react";
import Styles from "./styles.module.scss";
import GlobalStyles from "../../global.module.scss";
import { Link } from "react-router-dom";
import SearchContext from "../../Provider/SearchProvider";
import { SearchContextContent } from "../../Provider/types";
import { NavbarStatus } from "./types";

/**
 * Navbar Component
 *
 * This component renders a navigation bar with a search input
 * and two buttons to toggle the search input.
 *
 * @returns {JSX.Element} The navigation bar component.
 */
export default function Navbar(): JSX.Element {
  /**
   * State for the Search Bar
   *
   * Logic applied when combined with ./styles.module.scss
   * and used for small devices
   *
   */
  const [active, setActive] = useState<NavbarStatus>({
    search: true,
    close: false,
  });

  /**
   * @effect that adds a listener for window resize
   * and updates the active state when the window width
   * exceeds 640px.
   *
   * This effect is necessary to ensure that the search bar
   * is displayed correctly on larger screens.
   */
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 640) {
        setActive({ search: true, close: false });
      }
    });
  }, []);

  /**
   * Function that toggles the search and close properties
   * of the active state
   *
   * @returns {void}
   */
  const changeActive = (): void =>
    setActive((prevState: NavbarStatus) => ({
      search: !prevState.search,
      close: !prevState.close,
    }));

  const { search, setSearch } = useContext<SearchContextContent>(SearchContext);

  return (
    <nav className={Styles.navBar}>
      <Link
        to="/"
        onClick={() => {
          /**
           * After clicking on title, user will redirected
           * to "/", scrolled to top of page,
           */
          scrollTo({ behavior: "smooth", top: 0 });
          /**
           * And also search query will be reset
           */
          setSearch("");
        }}
        className={[Styles.title, active.close ? GlobalStyles.hide : ""].join(
          " "
        )}
      >
        <span>مووی لند</span>
      </Link>
      <input
        className={[Styles.searchBar, active.close ? "" : Styles.hide].join(
          " "
        )}
        placeholder="جستجو"
        onChange={(event) =>
          /**
           * If it's value changes, applies it using @function setSearch
           * to @var search
           */ setSearch(event.target.value)
        }
        value={search}
        type="search"
      />
      <button
        className={[
          Styles.activeSearch,
          active.search ? "" : GlobalStyles.hide,
        ].join(" ")}
        onClick={changeActive}
      >
        جستجو
      </button>
      <button
        className={[
          Styles.closeSearch,
          active.close ? "" : search.length === 0 ? GlobalStyles.hide : "",
        ].join(" ")}
        onClick={() => {
          changeActive();
          setSearch("");
        }}
      >
        X
      </button>
    </nav>
  );
}
