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
  page: number;
  results: Array<Type>;
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface GenreType {
  genres: Array<Genre>;
}

export default async function getContent<T extends Type>(
  content: T
): Promise<
  T extends Type.Genre
    ? GenreType
    : Response<T extends Type.TopRated ? TVType : MovieType>
> {
  return await fetch(
    url + content + (content !== Type.Genre ? query : ""),
    options
  )
    .then((response) => response.json())
    .catch((err) => {
      return err;
    });
}

interface Company {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: Array<Genre>;
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: Array<string>;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<Company>;
  production_countries: [
    {
      iso_3166_1: string;
      name: string;
    }
  ];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [
    {
      english_name: string;
      iso_639_1: string;
      name: string;
    }
  ];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TVDetail {
  adult: boolean;
  backdrop_path: string;
  created_by: [
    {
      id: number;
      credit_id: string;
      name: string;
      original_name: string;
      gender: number;
      profile_path: string;
    }
  ];
  episode_run_time: Array<any>;
  first_air_date: string;
  genres: Array<Genre>;
  homepage: string;
  id: number;
  in_production: false;
  languages: Array<string>;
  last_air_date: string;
  last_episode_to_air: {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    episode_type: string;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string;
  };
  name: string;
  next_episode_to_air: null;
  networks: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }
  ];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<Company>;
  production_countries: [
    {
      iso_3166_1: string;
      name: string;
    }
  ];
  seasons: Array<Season>;
  spoken_languages: [
    {
      english_name: string;
      iso_639_1: string;
      name: string;
    }
  ];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
}

export interface CompanyType {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export enum DetailType {
  Movie = "movie/",
  TV = "tv/",
}

export async function getMovie<T extends DetailType>(
  id: number,
  type: T
): Promise<T extends DetailType.Movie ? MovieDetail : MovieDetail> {
  return await fetch(url + type + id + query, options).then((response) =>
    response.json()
  );
}
