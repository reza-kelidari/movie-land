/**
 * Fetching a single media details from server
 *
 * This module exports getMovie function, which fetches a
 * single media details from server based on given ID and Type
 */

import { DetailType } from "../Credits/types";
import { dataURL, query, options } from "../../Utility/Statics";
import { MovieDetail } from "./types";

/**
 * Fetched media details from server based on given ID and Type
 *
 * @template T - The type of media, which must be a sub type
 * of `DetailType`. sets by `type` param.
 *
 * @param {number} id - Media ID
 * @param {T} type - Media Type
 *
 * @returns {Promise}
 */
export async function getMovie<T extends DetailType>(
  id: number,
  type: T
): Promise<T extends DetailType.Movie ? MovieDetail : MovieDetail> {
  /**
   * Construct the API URL for fetching credits data.
   */
  const url = dataURL + type + id + query;

  /**
   * Fetch the movie data from the API.
   */
  return await fetch(url, options).then((response) => response.json());
}
