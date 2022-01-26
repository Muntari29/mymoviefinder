export interface IMovieList {
  movieData: ImovieData[];
}

export interface ImovieData {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
