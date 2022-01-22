import type { NextPage } from 'next';
import Layout from '@/components/domain/Layout';
import { getSearchMovieData } from './api/movie';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import MovieList from '@/components/MovieList';

const Home = ({
  initData,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  console.log(initData);
  return (
    <>
      <Layout />
      <MovieList />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await getSearchMovieData('Avengers');
  const initData = res;
  return { props: { initData } };
};

export default Home;
