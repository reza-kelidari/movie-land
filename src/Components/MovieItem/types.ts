import { TVType } from "../../API/TV/types";
import { SearchResponseType } from "../../API/Search/types";
import { MovieType } from "../../API/Movie/types";

/**
 * Interface for MovieItem component props
 *
 * @interface MovieItem
 * @prop {MovieType} movie
 * @prop {TVType} tv
 * @prop {SearchResponseType} search
 */
export interface MovieItemProps {
  /**
   * The movie details, should be like MovieType
   */
  movie?: MovieType;

  /**
   * The tv serie details, should be like TVType
   */
  tv?: TVType;

  /**
   * The search result details, should be like SearchResponseType
   */
  search?: SearchResponseType;
}

/**
 * Parsing media data from props
 *
 * @property {number} id - Media id
 * @property {title} string - Media title
 * @property {year} string - Media release year
 * @property {vote} string - Media average vote
 * @property {type} string - Media type, Movie or TV
 * @property {poster} string - Media poster
 */
export interface MediaData {
  /** The movie identifier, or tv serie identifier, or search result identifier */
  id: number;

  /** The movie title, or tv serie name, or search result name or title */
  title: string;

  /** The movie Release date, or tv first air date, or search result release date or first air date */
  year: string;

  /** The movie or tv serie or search result average vote */
  vote: string;

  /** It's should defined by search result media type, or a movie or a tv */
  type: string;

  /** The movie or tv serie or search result vote */
  poster: string;
}
