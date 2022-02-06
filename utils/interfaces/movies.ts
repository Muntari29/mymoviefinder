export interface IMovieList {
  // movieData: ImovieData[] | null;
  movieTitle: string | null;
  onClick(movieId: string): void;
}

export interface ImovieData {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IMovieModal {
  seletedMovieId: string;
  onClose(): void;
}

export interface IgetOneMovieData {
  Actors: string;
  Plot: string;
  Poster: string;
  Released: string;
  Runtime: string;
  Title: string;
  Type: string;
  Writer: string;
  Year: string;
  imdbRating: string;
  imdbVotes: string;
}
