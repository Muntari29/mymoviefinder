import { getSearchMovieData } from './api/movie';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import MovieList from '@/components/MovieList';
import Header from '@/components/domain/Header';
import SearchInput from '@/components/SearchInput';
import { useState } from 'react';

const Home = ({
  initData,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  const [movieList, setMovieList] = useState(initData);

  const onSubmit = async (title: string) => {
    const { Search: data } = await getSearchMovieData(title);
    setMovieList(data);
  };

  return (
    <>
      <Header />
      <main>
        <SearchInput onSubmit={onSubmit} />
        <MovieList movieData={movieList} />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await getSearchMovieData('Avengers');
  const { Search: initData } = res;
  return { props: { initData } };
};

export default Home;
