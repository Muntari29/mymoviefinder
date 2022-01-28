import { getSearchMovieData } from './api/movie';
import MovieList from '@/components/domain/MovieList';
import Header from '@/components/domain/Header';
import SearchInput from '@/components/SearchInput';
import { ImovieData } from '@/utils/interfaces/movies';
import CommonView from '@/components/CommonView';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Home = (): JSX.Element => {
  const [movieList, setMovieList] = useState<ImovieData[] | null>(null);
  const [isInit, setIsInit] = useState(false);
  const router = useRouter();

  const onSubmit = async (title: string) => {
    const { Search: data } = await getSearchMovieData(title);
    setIsInit(true);
    setMovieList(data);
  };

  useEffect(() => {
    setIsInit(false);
  }, [router]);

  return (
    <>
      <Header />
      <main>
        <SearchInput onSubmit={onSubmit} />
        {isInit ? (
          <MovieList movieData={movieList} />
        ) : (
          <CommonView width={80} height={80} text={'영화를 검색해주세요!'} />
        )}
      </main>
    </>
  );
};

export default Home;
