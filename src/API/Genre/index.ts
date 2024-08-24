/**
 * Fetching list of movies from server
 *
 * This module export getGenre function, which fetches a
 * list of movies from server based on given ID
 */

import { dataURL, defaultQuery, options } from "../../Utility/Statics";
import { Response } from "../types";
import { GenresResponse } from "./types";

/**
 * Fetching list of movies from server based on given ID
 *
 * @returns {Promise}
 */
export async function getGenre(id: number): Promise<Response<GenresResponse>> {
  /**
   * Custom queries
   *
   * `&include_adult=true`
   * `&include_video=false`
   * `&page=1`
   * `&sort_by=popularity.desc`
   */
  const customQuery =
    "&include_adult=true&include_video=false&page=1&sort_by=popularity.desc";

  /**
   * Construct the API URL for fetching credits data.
   */
  const url =
    dataURL +
    "discover/movie" +
    defaultQuery +
    customQuery +
    "&with_genres=" +
    id;

  /**
   * Fetch the movies list from th API
   */

  return await fetch(url, options).then((response) => response.json());
}
