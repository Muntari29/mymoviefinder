import { ImovieData } from '@/utils/interfaces/movies';
import MovieList from '@/components/domain/MovieList';
import SearchInput from '@/components/SearchInput';
import CommonView from '@/components/CommonView';
import MovieModal from '@/components/MovieModal';
import { getSearchMovieData } from './api/movie';
import Header from '@/components/domain/Header';
import { useEffect, useState } from 'react';
import Spinner from '@/components/Spinner';
import { useRouter } from 'next/router';

const Home = (): JSX.Element => {
  const [seletedMovieId, setSeletedMovieId] = useState<string | null>(null);
  // const [movieData, setMovieData] = useState<ImovieData[] | null>(null);
  const [movieTitle, setMovieTitle] = useState<string | null>(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInit, setIsInit] = useState(false);
  const router = useRouter();

  const inputSubmitEvent = (title: string) => {
    setIsLoading(true);
    setMovieTitle(title);
    setIsInit(true);
    console.log('inpu');
    setIsLoading(false);
  };

  // const onSubmit = async (title: string) => {
  //   setIsLoading(true);
  //   const { Search: data } = await getSearchMovieData(title);
  //   setIsInit(true);
  //   setMovieData(data);
  //   setIsLoading(false);
  // };

  const onClick = (movieId: string) => {
    setSeletedMovieId(movieId);
    setIsShowModal(true);
  };

  const closedModal = () => {
    setIsShowModal(false);
  };

  useEffect(() => {
    setIsInit(false);
  }, [router]);

  console.log('App');
  return (
    <>
      <Header />
      <main>
        <SearchInput inputSubmitEvent={inputSubmitEvent} />
        {isLoading ? (
          <Spinner />
        ) : isInit ? (
          <MovieList movieTitle={movieTitle} onClick={onClick} />
        ) : (
          <CommonView width={80} height={80} text={'영화를 검색해주세요!'} />
        )}
      </main>
      {isShowModal && seletedMovieId && (
        <MovieModal onClose={closedModal} seletedMovieId={seletedMovieId} />
      )}
    </>
  );
};

export default Home;
