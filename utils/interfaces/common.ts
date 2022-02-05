export interface ICommonView {
  src?: string | StaticImageData;
  width: string | number | undefined;
  height: string | number | undefined;
  text: string;
}

export interface ISearchInput {
  onSubmit: (title: string) => {};
}

export interface IPageNation {
  totalResults?: number;
}
