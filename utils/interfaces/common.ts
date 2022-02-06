import { MouseEventHandler } from 'react';

export interface ICommonView {
  src?: string | StaticImageData;
  width: string | number | undefined;
  height: string | number | undefined;
  text: string;
}

export interface ISearchInput {
  // onSubmit: (title: string) => {};
  inputSubmitEvent(title: string): void;
}

export interface IPageNation {
  totalPosts: number;
  updateMovieData: MouseEventHandler;
}
