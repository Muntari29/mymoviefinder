import { useEffect } from 'react';
import Layout from '../components/domain/Layout';
import { getSearchMovieData } from './api/movie';

const Abc = () => {
  useEffect(() => {
    getSearchMovieData('abcd');
  }, []);

  return (
    <>
      <Layout />
    </>
  );
};

export default Abc;
