import { SearchResponseType } from "../../API/Search/types";
import { MovieType } from "../../API/Movie/types";

/**
 * Type for Content state in Home page
 */
export type ContentType = Array<MovieType>;

/**
 * Type for searchResult state in Home page
 */
export type SearchResultType = Array<SearchResponseType>;
