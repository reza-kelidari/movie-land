import { useContext, useEffect, useState } from "react";
import Styles from "./styles.module.scss";
import GlobalStyles from "../../global.module.scss";
import { Link } from "react-router-dom";
import SearchContext from "../../Provider/SearchProvider";

export default function Navbar() {
  interface NavbarStatus {
    search: boolean;
    close: boolean;
  }

  const [active, setActive] = useState<NavbarStatus>({
    search: true,
    close: false,
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 640) {
        setActive({ search: true, close: false });
      }
    });
  }, []);

  const changeActive: () => void = () =>
    setActive((prevState) => ({
      search: !prevState.search,
      close: !prevState.close,
    }));

  const { search, setSearch } = useContext(SearchContext);

  return (
    <nav className={Styles.navBar}>
      <Link
        to="/"
        onClick={() => {
          scrollTo({ behavior: "smooth", top: 0 });
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
        onChange={(event) => setSearch(event.target.value)}
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
          active.close ? "" : GlobalStyles.hide,
        ].join(" ")}
        onClick={changeActive}
      >
        X
      </button>
    </nav>
  );
}
