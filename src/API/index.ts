/**
 * Data fetching utility
 *
 * This module exports a getContent function, which fetches data
 * from the API based on the provided content type.
 */

import { options, defaultQuery, dataURL } from "../Utility/Statics";
import { MovieType } from "./Movie/types";
import { Response, Type } from "./types";
import { GenresType } from "./Genre/types";

/**
 * Fetches data from the API based on the provided content type.
 *
 * @template T - The type of content to fetch, which must be a subtype of Type.
 *
 * @param {T} content - The type of content to fetch.
 *
 * @returns {Promise} A promise that resolves to the fetched data. If the content type is Genre,
 * the promise resolves to a GenreType object. Otherwise, it resolves to a
 * Response object containing an array of MovieType objects.
 */
export default async function getContent<T extends Type>(
  content: T
): Promise<T extends Type.Genre ? GenresType : Response<MovieType>> {
  /**
   * Construct the API URL based on the content type.
   */
  const url = dataURL + content + (content !== Type.Genre ? defaultQuery : "");

  /**
   * Fetch the data from the API.
   */
  return await fetch(url, options)
    .then((response) => response.json())
    .catch((err) => {
      return err;
    });
}
