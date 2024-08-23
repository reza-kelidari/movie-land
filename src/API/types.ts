/**
 * General Interfaces and Enums used for data fetching
 * and response handling
 */

/**
 * Response Interface
 *
 * Represents the shape of the response data from the server
 *
 * @interface Response
 * @template Type
 */
export interface Response<Type> {
  /**
   * The current page number of the response
   */
  page: number;

  /**
   * An array of results
   */
  results: Array<Type>;

  /**
   * The total number of pages in the response
   */
  total_pages: number;

  /**
   * The total number of results in the response
   */
  total_results: number;
}

/**
 * Company Interface
 *
 * Represents type Company
 *
 * @interface CompanyType
 */
export interface CompanyType {
  /**
   * The unique identifier of the company
   */
  id: number;

  /**
   * The company logo URL
   */
  logo_path: string;

  /**
   * The company name
   */
  name: string;

  /**
   * The country of origin for the company
   */
  origin_country: string;
}

/**
 * Data Fetching Types
 *
 * Enum representing the different types of data that can be fetched from the server
 *
 * @enum Type
 */
export enum Type {
  /**
   * Upcoming movies
   */
  Upcoming = "movie/upcoming",

  /**
   * Popular movies
   */
  Popular = "movie/popular",

  /**
   * Top rated TV shows
   */
  TopRated = "tv/top_rated",

  /**
   * Trending movies of the week
   */
  Trending = "trending/movie/week",

  /**
   * List of movie genres
   */
  Genre = "genre/movie/list",
}
