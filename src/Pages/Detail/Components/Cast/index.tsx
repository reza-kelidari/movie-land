import { imageURL } from "../../../../Utility/Statics";
import Styles from "./styles.module.scss";
import { CastProps } from "./type";

/**
 * Cast component for Detail page
 *
 * This component renders an element contains actor photo, name, and
 * the job and character he played in that media
 *
 * @param cast - Detail of Actor
 * @returns {JSX.Element}
 */
export default function Cast({ cast }: CastProps): JSX.Element {
  return (
    <div className={Styles.cast}>
      <img
        src={imageURL + "w185" + cast.profile_path}
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
