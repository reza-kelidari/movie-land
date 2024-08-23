import { imageURL } from "../../../../Utility/Statics";
import Styles from "./styles.module.scss";
import { CompanyProps } from "./types";

/**
 * Company component for Detail page
 *
 * This component renders an element contains company logo
 * or name
 *
 * @param company - Detail of Actor
 * @returns {JSX.Element}
 */
export default function Company({ company }: CompanyProps): JSX.Element {
  return company.logo_path ? (
    <img
      src={imageURL + "/w92" + company.logo_path}
      alt="Logo"
      className={Styles.company}
    />
  ) : (
    <div className={Styles.company}>{company.name}</div>
  );
}
