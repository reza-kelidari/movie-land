/**
 * General Interfaces used for data fetching and response
 * handling
 */

/**
 * Genre Interface
 *
 * Represent shape of a Genre
 */
export interface Genre {
  /**
   * Unique identifier of the genre
   */
  id: number;

  /**
   * name of the genre
   */
  name: string;
}

/**
 * GenresType Interface
 *
 * Represent shape of response
 */
export interface GenresType {
  genres: Array<Genre>;
}

/**
 * GenresResponse Interface
 *
 * Represent shape of an movie, when fetching a list
 * of that based on a specific genre
 */
export interface GenresResponse {
  /**
   * Does it contains anything +18
   */
  adult: boolean;

  /**
   * Backdrop path of the movie
   */
  backdrop_path: string;

  /**
   * Movie genres identifier numbers in an array of numbers
   */
  genre_ids: Array<number>;

  /**
   * Unique identifier of the movie
   */
  id: number;

  /**
   * Original language of the movie
   */
  original_language: string;

  /**
   * Original title of the movie
   */
  original_title: string;

  /**
   * Long decription of the movie
   */
  overview: string;

  /**
   * Popularity of the movie
   */
  popularity: number;

  /**
   * Poster path of the movie
   */
  poster_path: string;

  /**
   * Year when movie was released
   */
  release_date: string;

  /**
   * Title of the movie
   */
  title: string;

  /**
   * Does it is a video
   */
  video: boolean;

  /**
   * Average vote of the movie
   */
  vote_average: number;

  /**
   * Count of votes of the movie
   */
  vote_count: number;
}
