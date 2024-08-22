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
  Genre = "genre/movie/list",
}

export interface MovieType {
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
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TVType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}

interface Response<Type> {
  genres: Array<Genre>;
  page: number;
  results: Array<Type>;
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

export default async function getContent<T extends Type>(
  content: T
): Promise<
  Response<
    T extends Type.TopRated ? TVType : T extends Type.Genre ? Genre : MovieType
  >
> {
  console.log(url);
  console.log(url);

  return await fetch(
    url + content + (content !== Type.Genre ? query : ""),
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
}
