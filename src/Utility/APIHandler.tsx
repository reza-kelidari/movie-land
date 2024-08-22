const apiKey: string =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDU5NDJmNmUzYTYyNzI2MjRmNmQxZjQ1N2Q1OTVkYyIsIm5iZiI6MTcyNDE1NzI4NC4zMzkyNywic3ViIjoiNjZjMjAyMjQwYzg3ZDE2NTZmMWE4YjMxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.4HNFx2j2UFL9Pf-XCep6wBglTE4ESN58Qt1Jhi0oyME";
const url: string = "https://api.themoviedb.org/3/";
const query: string = "?language=fa-IR";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: apiKey,
  },
};

export enum Type {
  Upcoming = "movie/upcoming",
  Popular = "movie/popular",
  TopRated = "tv/top_rated",
  Trending = "trending/movie/week",
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}

interface Response {
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

interface Genres {
  genres: Array<Genre>;
}

export default async function getContent(content: Type): Promise<Response> {
  return await fetch(url + content + query, options)
    .then((response) => response.json())
    .then((response: Response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
}

export function getGenres() {
  return fetch(url + "genre/movie/list", options)
    .then((response) => response.json())
    .then((response: Genres) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
}
