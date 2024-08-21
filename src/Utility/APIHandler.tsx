const apiKey: string = "Bearer 205942f6e3a6272624f6d1f457d595dc";

export enum Type {
  Upcoming = "upcoming",
  Popular = "popular",
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

export default async function getContent(content: Type): Promise<Response> {
  return await fetch("https://api.themoviedb.org/3/movie/" + content, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: apiKey,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
}
