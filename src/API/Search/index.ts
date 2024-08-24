/**
 * Fetching medias from server, by a specific query
 *
 * This module exports searchMedia function, which fetches
 * medias from server by a specific provided query
 */

import { dataURL, defaultQuery, options } from "../../Utility/Statics";
import { Response } from "../types";
import { SearchResponseType } from "./types";

/**
 * Fetches medias from server by a specific provided query
 *
 * @param {string} q - Search query
 * @returns {Promise<Response<SearchResponseType>>}
 */
export async function searchMedia(
  q: string
): Promise<Response<SearchResponseType>> {
  /**
   * Construct the API URL for fetching credits data.
   */
  const url =
    dataURL +
    "search/multi" +
    defaultQuery +
    "&query=" +
    q +
    "&include_adult=true&page=1&";

  /**
   * Fetch the medias from the API.
   */
  return fetch(url, options).then((response) => response.json());
}
