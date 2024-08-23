import { TVDetail } from "../../API/TV/types";
import { MovieDetail } from "../../API/Movie/types";

/**
 * Type for Movie detail state in Details page
 */
export type MovieDetailType = MovieDetail & TVDetail;
