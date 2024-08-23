import { Context, createContext } from "react";
import { SearchContextContent } from "./types";

/**
 * Context that maintains Search query
 */
const SearchContext: Context<SearchContextContent> =
  createContext<SearchContextContent>({
    search: "",
    setSearch: () => {},
  });
export default SearchContext;
