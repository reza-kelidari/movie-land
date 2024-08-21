import { useState } from "react";
import Styles from "./styles.module.scss";
import GlobalStyles from "../../global.module.scss";

export default function Navbar() {
  interface NavbarStatus {
    search: boolean;
    close: boolean;
  }
  const [active, setActive] = useState<NavbarStatus>({
    search: true,
    close: false,
  });

  const changeActive: () => void = () =>
    setActive((prevState) => ({
      search: !prevState.search,
      close: !prevState.close,
    }));

  return (
    <nav className={Styles.navBar}>
      <div
        className={[Styles.title, active.close ? GlobalStyles.hide : ""].join(
          " "
        )}
      >
        <span>مووی لند</span>
      </div>
      <input
        className={[Styles.searchBar, active.close ? "" : Styles.hide].join(
          " "
        )}
        placeholder="جستجو"
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
