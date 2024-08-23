/**
 * Context value for the search query and update function
 *
 * @interface SearchContextType
 * @property {string} search - Which contains Search query
 * @property {void} setSearch - Which contains change query method
 */
export interface SearchContextContent {
  /**
   * This property contains Search query, that used in APIHandler
   * to fetch items by a specific query
   */
  search: string;

  /**
   * This propery is Change query method
   * @param value - Which is new Search query
   */
  setSearch: (value: string) => void;
}
