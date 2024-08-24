import { TVType } from "../../API/TV/types";
import { SearchResponseType } from "../../API/Search/types";
import { MovieType } from "../../API/Movie/types";
import { GenresResponse } from "../../API/Genre/types";

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
   * The movie item details
   */
  movie?: MovieType;

  /**
   * The tv serie item details
   */
  tv?: TVType;

  /**
   * The search result item details
   */
  search?: SearchResponseType;

  /**
   * The filter result item details
   */
  filter?: GenresResponse;
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
  /** The movie, or tv serie, or search result,or filter result
   * identifier */
  id: number;

  /** The movie title
   *
   * Or tv serie name
   *
   * Or search result name or title
   *
   * Or filter result name */
  title: string;

  /** The movie Release date
   *
   * Or tv first air date
   *
   * Or search result release date or first air date
   *
   * Or filter result release date */
  year: string;

  /** The movie or tv serie or search result or filter result average vote */
  vote: string;

  /** It's should Declared by search result media type,
   *
   * Or a movie or a tv
   *
   * Or if it's a filter result, it's a movie
   */
  type: string;

  /** The movie or tv serie or search result or filter result vote */
  poster: string;
}
