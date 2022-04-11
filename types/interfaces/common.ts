export interface ICommonView {
  src?: string | StaticImageData;
  width: string | number | undefined;
  height: string | number | undefined;
  text: string;
}

export interface ISearchInput {
  onSubmit(title: string): void;
}

export interface IPageNation {
  totalLength: number;
  onClickPagiNation: (pageNumber: number) => void;
  limit: number;
  page: number;
}
