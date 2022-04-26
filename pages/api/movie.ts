import { IgetOneMovieData, IGetResponse } from 'types/interfaces/movies';
import apiRequest from '.';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getSearchMovieData = async (
  title: string,
  page: number = 1
): Promise<IGetResponse | undefined> => {
  try {
    const res = await apiRequest.getAll(`?apikey=${API_KEY}`, {
      params: { s: title, page },
    });
    if (res.status === 200) return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const getDetailMovieData = async (
  movieId: string
): Promise<IgetOneMovieData | undefined> => {
  try {
    const res = await apiRequest.getDetail(`?apikey=${API_KEY}`, {
      params: { i: movieId, plot: 'short' },
    });
    if (res.status === 200) return res.data;
  } catch (e) {
    console.error(e);
    alert('간혹 응답 시간을 초과하는 POST가 존재합니다. 다시 시도해주세요!');
    return;
  }
};
