/**
 * General Interfaces and Enums used for data fetching
 * and response handling
 */

/**
 * DetailType Enum
 *
 * Represent types that the Media can have
 */
export enum DetailType {
  /**
   * Movie type
   */
  Movie = "movie/",

  /**
   * TV type
   */
  TV = "tv/",
}

/**
 * CastType Interface
 *
 * Represent a single Cast member
 */
export interface CastType {
  /**
   * Does it contains anything +18
   */
  adult: boolean;

  /**
   * The cast member's gender
   */
  gender: number;

  /**
   * The cast member's unique identifier
   */
  id: number;

  /**
   * The department the cast member is known for
   */
  known_for_department: string;

  /**
   * The cast member's name
   */
  name: string;

  /**
   * The cast member's original name
   */
  original_name: string;

  /**
   * The cast member's popularity
   */
  popularity: number;

  /**
   * The cast member's profile path
   */
  profile_path: string;

  /**
   * The cast member's cast identifier
   * */
  cast_id: number;

  /**
   * The character the cast member played
   */
  character: string;

  /**
   * The cast member's credit identifier
   */
  credit_id: string;

  /**
   * The cast member's order in the listF
   */
  order: number;
}

/**
 * CrewType Interface
 *
 * Represent a single Crew member
 */
export interface CrewType {
  /**
   * Does it contains anything +18
   */
  adult: boolean;

  /**
   * The crew member's gender.
   */
  gender: number;

  /**
   * The crew member's unique identifier
   */
  id: number;

  /**
   * The department the crew member is known for
   */
  known_for_department: string;

  /**
   * The crew member's name
   */
  name: string;

  /**
   * The crew member's original name
   */
  original_name: string;

  /**
   * The crew member's popularity
   */
  popularity: number;

  /**
   * The crew member's photo path
   */
  profile_path: string;

  /**
   * The crew member's credit identifier
   */
  credit_id: string;

  /**
   * The crew member's department
   */
  department: string;

  /**
   * The crew member's job
   */
  job: string;
}

/**
 * CreditResponse Interface
 *
 * Represent shape of credit response
 */
export interface CreditResponse {
  /**
   * The unique identifier of the credit response
   */
  id: number;

  /**
   * The list of cast members
   */
  cast: Array<CastType>;

  /**
   * The list of crew members
   */
  crew: Array<CrewType>;
}
