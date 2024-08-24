import { Genre } from "../../../../../API/Genre/types";

/**
 * GenresListType Type
 *
 * Type for Genres state in Genres component
 */
export type GenresListType = Array<Genre>;

/**
 * GenreInteType Interface
 *
 * Type for GenreItem component in Genres component
 */

export interface GenreInteType {
  /**
   * Unique identifier of the genre
   */
  id: number;

  /**
   * Name of the genre
   */
  name: string;
}
