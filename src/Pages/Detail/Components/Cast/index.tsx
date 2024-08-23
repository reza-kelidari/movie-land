import { CastType } from "../../../../Utility/APIHandler";
import Styles from "./styles.module.scss";

export default function Cast({ cast }: { cast: CastType }) {
  return (
    <div className={Styles.cast}>
      <img
        src={"https://image.tmdb.org/t/p/w185" + cast.profile_path}
        alt="Propfile"
        className={Styles.profile}
      />

      <div className={Styles.detail}>
        <h3 className={Styles.name}>{cast.name}</h3>
        <h3 className={Styles.job}>{cast.known_for_department}</h3>
        <h3 className={Styles.character}>{cast.character}</h3>
      </div>
    </div>
  );
}
