/**
 * API Key used for fetching data from server
 */
export const apiKey: string =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDU5NDJmNmUzYTYyNzI2MjRmNmQxZjQ1N2Q1OTVkYyIsIm5iZiI6MTcyNDE1NzI4NC4zMzkyNywic3ViIjoiNjZjMjAyMjQwYzg3ZDE2NTZmMWE4YjMxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.4HNFx2j2UFL9Pf-XCep6wBglTE4ESN58Qt1Jhi0oyME";

/**
 * Default url for fetching data from server
 */
export const dataURL: string = "https://api.themoviedb.org/3/";

/**
 * Default url for images
 */
export const imageURL: string = "https://image.tmdb.org/t/p/";

/**
 * Custom queries
 */
export const query: string = "?language=fa-IR";

/**
 * Options for fetching data from server
 */
export const options = {
  /**
   * Fetch method
   */
  method: "GET",

  /**
   * Fetch headers
   */
  headers: {
    /**
     * Response type that needed
     */
    accept: "application/json",

    /**
     * API key
     */
    Authorization: apiKey,
  },
};
