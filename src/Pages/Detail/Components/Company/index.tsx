import { CompanyType } from "../../../../Utility/APIHandler";
import Styles from "./styles.module.scss";

export default function Company({ company }: { company: CompanyType }) {
  return company.logo_path ? (
    <img
      src={"https://image.tmdb.org/t/p/w92" + company.logo_path}
      alt="Logo"
      className={Styles.company}
    />
  ) : (
    <div className={Styles.company}>{company.name}</div>
  );
}
