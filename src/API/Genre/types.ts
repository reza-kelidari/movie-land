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
  id: number;
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
