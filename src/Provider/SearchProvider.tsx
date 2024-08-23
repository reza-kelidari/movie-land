import { createContext } from "react";

export interface SearchContextType {
  search: string;
  setSearch: (value: string) => void;
}

const SearchContext = createContext<SearchContextType>({
  search: "",
  setSearch: () => {},
});
export default SearchContext;
