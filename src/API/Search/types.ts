/**
 * General Interface used for data fetching and response
 * handling
 */
export interface SearchResponseType {
  /**
   * Backdrop path of the media
   */
  backdrop_path?: string;

  /**
   * Unique identifier of the media
   */
  id?: number;

  /**
   * Title of the media, if it's a movie
   */
  title?: string;

  /**
   * Original title of the media, if it's a movie
   */
  original_title?: string;

  /**
   * Name of the media, if it's a tv serie
   */
  name?: string;

  /**
   * Original name of the media, if it's a tv serie
   */
  original_name?: string;

  /**
   * Overview of the media
   */
  overview?: string;

  /**
   * Poster path of the media
   */
  poster_path?: string;

  /**
   * Type of the media, `tv` or `movie`
   */
  media_type?: string;

  /**
   * Does it contains anything +18
   */
  adult?: false;

  /**
   * Original language of the media
   */
  original_language?: string;

  /**
   * The media genre identifiers in an array
   */
  genre_ids?: Array<number>;

  /**
   * Popularity of the media
   */
  popularity?: number;

  /**
   * When the media released, if it's a tv serie
   */
  first_air_date?: string;

  /**
   * When the media released, if it's a movie
   */
  release_date?: string;

  /**
   * Average vote of the media
   */
  vote_average?: number;

  /**
   * Count of the media's votes
   */
  vote_count?: number;

  /**
   * Does this media is a video
   */
  video?: boolean;

  /**
   * Original country of the media
   */
  origin_country?: Array<string>;
}
