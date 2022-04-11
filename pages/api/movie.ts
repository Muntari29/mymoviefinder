import axios from 'axios';
import { IgetOneMovieData, IGetResponse } from 'types/interfaces/movies';

const API_END_POINT = process.env.NEXT_PUBLIC_API_END_POINT;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const instanceAxios = axios.create({
  timeout: 3000,
  method: 'GET',
});

export const getSearchMovieData = async (
  title: string,
  page: number = 1
): Promise<IGetResponse | undefined> => {
  try {
    const res = await instanceAxios({
      url: `${API_END_POINT}?apikey=${API_KEY}&s=${title}&page=${page}`,
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
    const res = await instanceAxios({
      url: `${API_END_POINT}?apikey=${API_KEY}&i=${movieId}&plot=short`,
    });
    if (res.status === 200) return res.data;
  } catch (e) {
    console.error(e);
    alert('간혹 응답 시간을 초과하는 POST가 존재합니다. 다시 시도해주세요!');
    return;
  }
};
