export interface IMovieList {
  getData: ImovieData[];
}

export interface ImovieData {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
