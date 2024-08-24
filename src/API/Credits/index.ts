/**
 * Fetching Media credits from server
 *
 * This module exports getCredits function, which fetches credit
 * data from server based on given Media ID and Type
 */

import { dataURL, defaultQuery, options } from "../../Utility/Statics";
import { DetailType, CreditResponse } from "./types";

/**
 * Fetches Media credits based on given Media ID and Type
 *
 * @template T - The type of media, which must be a sub type
 * of `DetailType`. sets by `type` param.
 *
 * @param {number} id - Media ID
 * @param {T} type - Media Type
 *
 * @returns {Promise<CreditResponse>} - A promise that
 */
export async function getCredits<T extends DetailType>(
  id: number,
  type: T
): Promise<CreditResponse> {
  /**
   * Construct the API URL for fetching credits data.
   */
  const url = dataURL + type + id + "/credits" + defaultQuery;

  /**
   * Fetch the credits data from the API.
   */
  return await fetch(url, options).then((response) => response.json());
}
