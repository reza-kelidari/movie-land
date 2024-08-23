/**
 * General Interfaces used for data fetching and response
 * handling
 */

import { Genre } from "../Genre/types";
import { CompanyType } from "../types";

/**
 * TVDetail Interface - For Detail page
 *
 * Represents shape of a tv serie details
 */
export interface TVDetail {
  /**
   * Does this contains anything +18
   */
  adult: boolean;

  /**
   * Backdrop path of the tv serie
   */
  backdrop_path: string;

  /**
   * Creator of the tv serie
   */
  created_by: Array<{
    /**
     * Unique identifier of the creator
     */
    id: number;

    /**
     * Credit identifier of the creator
     */
    credit_id: string;

    /**
     * Name of the creator
     */
    name: string;

    /**
     * Original name of the creator
     */
    original_name: string;

    /**
     * Gender of the creator
     */
    gender: number;

    /**
     * Profile path of the creator
     */
    profile_path: string;
  }>;

  /**
   * Episode runtime of the tv serie
   */
  episode_run_time: Array<any>;

  /**
   * When was first release of the tv serie
   */
  first_air_date: string;

  /**
   * The tv serie genre identifiers in an array
   */
  genres: Array<Genre>;

  /**
   * Website of the tv serie
   */
  homepage: string;

  /**
   * Unique dentifier of the tv serie
   */
  id: number;

  /**
   * Does the tv serie is in production
   */
  in_production: false;

  /**
   * Languages of the tv serie in an array
   */
  languages: Array<string>;

  /**
   * Last release year of the tv serie
   */
  last_air_date: string;

  /**
   * Last episode of the tv serie
   */
  last_episode_to_air: {
    /**
     * Idertifier of the last episode
     */
    id: number;

    /**
     * Name of the last episode
     */
    name: string;

    /**
     * Long description of the last episode
     */
    overview: string;

    /**
     * Average vote of the last episode
     */
    vote_average: number;

    /**
     * Count of the last episode votes
     */
    vote_count: number;

    /**
     * Year when the last episode released
     */
    air_date: string;

    /**
     * Number of the last episode
     */
    episode_number: number;

    /**
     * Type of the last episode
     */
    episode_type: string;

    /**
     * Production code of the last episode
     */
    production_code: string;

    /**
     * Runtime of the last episode
     */
    runtime: number;

    /**
     * Season number of the last episode
     */
    season_number: number;

    /**
     * Show id of the last episode
     */
    show_id: number;

    /**
     * Still path of the last episode
     */
    still_path: string;
  };

  /**
   * Name of the tv serie
   */
  name: string;

  /**
   * Next episode of the tv serie
   */
  next_episode_to_air: any;

  /**
   * Publisher network of the tv serie
   */
  networks: Array<{
    /**
     * Network unique identifier
     */
    id: number;

    /**
     * Network logo path
     */
    logo_path: string;

    /**
     * Network name
     */
    name: string;

    /**
     * Network origin country
     */
    origin_country: string;
  }>;

  /**
   * Number of episodes of the tv serie
   */
  number_of_episodes: number;

  /**
   * Number os seasons of the tv serie
   */
  number_of_seasons: number;

  /**
   * Origin country of the tv serie
   */
  origin_country: Array<string>;

  /**
   * Original language of the tv serie
   */
  original_language: string;

  /**
   * Original name of the tv serie
   */
  original_name: string;

  /**
   * Long description of the tv serie
   */
  overview: string;

  /**
   * Popularity of the tv serie
   */
  popularity: number;

  /**
   * Poster path of the tv serie
   */
  poster_path: string;

  /**
   * Production companies of the tv serie
   */
  production_companies: Array<CompanyType>;

  /**
   * Production countries of the tv serie
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
   * Seasons of the tv serie in an Array
   */
  seasons: Array<Season>;

  /**
   * The language of voices in the tv serie
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
   * Status of the tv serie, like doesit released or not
   */
  status: string;

  /**
   * Tagline of the tv serie
   */
  tagline: string;

  /**
   * Type of the tv serie
   */
  type: string;

  /**
   * Average vote of the tv serie
   */
  vote_average: number;

  /**
   * Count of votes of the tv serie
   */
  vote_count: number;
}

/**
 * Season Interface
 *
 * Represent shape of a single season
 */
interface Season {
  /**
   * Year when the season released
   */
  air_date: string;

  /**
   * Number of episodes of the season
   */
  episode_count: number;

  /**
   * Unique identifier of the season
   */
  id: number;

  /**
   * Name of the season
   */
  name: string;

  /**
   * Long description of the season
   */
  overview: string;

  /**
   * Poster path of the season
   */
  poster_path: string;

  /**
   * Number of the season
   */
  season_number: number;

  /**
   * Average vote of the season
   */
  vote_average: number;
}

/**
 * Interface TVType
 *
 * Represent shape of a single tv serie
 */
export interface TVType {
  /**
   * Does this contains anything +18
   */
  adult: boolean;

  /**
   * Backdrop path of the tv serie
   */
  backdrop_path: string;

  /**
   * The tv serie genre identifiers in an array
   */
  genre_ids: Array<number>;

  /**
   * Unique dentifier of the tv serie
   */
  id: number;

  /**
   * Origin country of the tv serie
   */
  origin_country: Array<string>;

  /**
   * Original language of the tv serie
   */
  original_language: string;

  /**
   * Original name of the tv serie
   */
  original_name: string;

  /**
   * Long description of the tv serie
   */
  overview: string;

  /**
   * Popularity of the tv serie
   */
  popularity: number;

  /**
   * Poster path of the tv serie
   */
  poster_path: string;

  /**
   * When was first releas of the tv serie
   */
  first_air_date: string;

  /**
   * name of the tv serie
   */
  name: string;

  /**
   * Average vote of the tv serie
   */
  vote_average: number;

  /**
   * Count of votes of the tv serie
   */
  vote_count: number;
}
