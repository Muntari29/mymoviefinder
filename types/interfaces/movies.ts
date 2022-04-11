export interface IMovieList {
  posts: ImovieData[];
  page: number;
  totalLength: number;
  onClickModalHanlder: (movieId: string) => void;
  onClickPagiNation: (pageNumber: number) => void;
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

export interface IRatingGetter {
  rating: number;
}

export interface IGetResponse {
  Response: string;
  Search: ImovieData[];
  totalResults: string;
}
