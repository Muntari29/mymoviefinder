import { getSearchMovieData } from './api/movie';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import MovieList from '@/components/MovieList';
import Header from '@/components/domain/Header';
import SearchInput from '@/components/SearchInput';
import { FormEvent, useState } from 'react';

const Home = ({
  initData,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  const [movieList, setMovieList] = useState<object[]>(initData);

  const onSubmit = async (title: string) => {
    const { Search: data } = await getSearchMovieData(title);
    console.log(3, data);
  };

  return (
    <>
      <Header />
      <main>
        <SearchInput onSubmit={onSubmit} />
        <MovieList getData={initData} />
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
