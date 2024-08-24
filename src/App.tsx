import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import GenreFilter from "./Pages/GenreFilter";
import SearchProvider from "./Provider/SearchProvider";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <SearchProvider.Provider value={{ search, setSearch }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/genre" element={<GenreFilter />} />
          </Routes>
        </BrowserRouter>
      </SearchProvider.Provider>
    </>
  );
}
