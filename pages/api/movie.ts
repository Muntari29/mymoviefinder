import axios from 'axios';
const API_END_POINT = process.env.NEXT_PUBLIC_API_END_POINT;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getSearchMovieData = async (title: string, page: number = 1) => {
  try {
    const res = await axios({
      url: `${API_END_POINT}?apikey=${API_KEY}&s=${title}&page=${page}`,
      method: 'GET',
    });
    if (res.statusText === 'OK') return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const getDetailMovieData = () => {};