/**
 * General Interfaces used for data fetching and response
 * handling
 */

import { CompanyType } from "../types";

/**
 * Movie Type - For lists in Home page
 *
 * Represents shape of a Movie in movies list
 */
export interface MovieType {
  /**
   * The movie unique identifier
   */
  id: number;

  /**
   * Does it contains anything +18
   */
  adult: boolean;

  /**
   * The movie backdrop path
   */
  backdrop_path: string;

  /**
   * The movie genre identifiers in an array
   */
  genre_ids: Array<number>;

  /**
   * The movie original language
   */
  original_language: string;

  /**
   * The movie original title
   */
  original_title: string;

  /**
   * Long description of the movie
   */
  overview: string;

  /**
   * The movie popularity
   */
  popularity: number;

  /**
   * The movie poster path
   */
  poster_path: string;

  /**
   * When the movie released
   */
  release_date: string;

  /**
   * The movie title
   */
  title: string;

  /**
   * Does this movie is a video?
   */
  video: boolean;

  /**
   * The movie average vote
   */
  vote_average: number;

  /**
   * The movie votes count
   */
  vote_count: number;
}

/**
 * Movie Detail - For Detail page
 *
 * Represents shape of Details of a single Movie
 */
export interface MovieDetail {
  /**
   * Unique identifier of the movie
   */
  id: number;

  /**
   * Title of the movie
   */
  title: string;

  /**
   * Does it contains anything +18
   */
  adult: boolean;

  /**
   * Backdrop path of the movie
   */
  backdrop_path: string;

  /**
   * Parent collection of the movie, may be `null`
   */
  belongs_to_collection?: {
    /**
     * The collection unique identifier
     */
    id: number;

    /**
     * The collection name
     */
    name: string;

    /**
     * The collection poster path
     */
    poster_path: string;

    /**
     * The collection backdrop path
     */
    backdrop_path: string;
  };

  /**
   * Budget of the movie
   */
  budget: number;

  /**
   * The movie genre identifiers in an array
   */

  genre_ids: Array<number>;

  /**
   * Website of the movie
   */
  homepage: string;

  /**
   * The movie identifier in IMDB
   */
  imdb_id: string;

  /**
   * Origin country of the movie
   */
  origin_country: Array<string>;

  /**
   * Original language of the movie
   */
  original_language: string;

  /**
   * Original title of the movie
   */
  original_title: string;

  /**
   * Long description of the movie
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
   * The movie production companies
   */
  production_companies: Array<CompanyType>;

  /**
   * The movie production countries
   */
  production_countries: Array<{
    /**
     * The country name based on ISO3166.1
     */
    iso_3166_1: string;

    /**
     * The country name
     */
    name: string;
  }>;

  /**
   * When movie released
   */
  release_date: string;

  /**
   * Revenue of the movie
   */
  revenue: number;

  /**
   * Runtime of the movie
   */
  runtime: number;

  /**
   * The languages of voices in the movie
   */
  spoken_languages: Array<{
    /**
     * The english name of the language
     */
    english_name: string;

    /**
     * The language name based on ISO639.1
     */
    iso_639_1: string;

    /**
     * The language name
     */
    name: string;
  }>;

  /**
   * The movie status, like does it released or not
   */
  status: string;

  /**
   * Tagline of the movie
   */
  tagline: string;

  /**
   * Does this is a video
   */
  video: boolean;

  /**
   * Average vote of the movie
   */
  vote_average: number;

  /**
   * The movie votes count
   */
  vote_count: number;
}
