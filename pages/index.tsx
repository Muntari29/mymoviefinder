import { getSearchMovieData } from './api/movie';
import MovieList from '@/components/domain/MovieList';
import Header from '@/components/domain/Header';
import SearchInput from '@/components/SearchInput';
import { ImovieData } from '@/utils/interfaces/movies';
import CommonView from '@/components/CommonView';
import Spinner from '@/components/Spinner';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MovieModal from '@/components/MovieModal';

const Home = (): JSX.Element => {
  const [seletedMovieId, setSeletedMovieId] = useState<string | null>(null);
  const [movieData, setMovieData] = useState<ImovieData[] | null>(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInit, setIsInit] = useState(false);
  const router = useRouter();

  const onSubmit = async (title: string) => {
    setIsLoading(true);
    const { Search: data } = await getSearchMovieData(title);
    setIsInit(true);
    setMovieData(data);
    setIsLoading(false);
  };

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

  return (
    <>
      <Header />
      <main>
        <SearchInput onSubmit={onSubmit} />
        {isLoading ? (
          <Spinner />
        ) : isInit ? (
          <MovieList movieData={movieData} onClick={onClick} />
        ) : (
          <CommonView width={80} height={80} text={'영화를 검색해주세요!'} />
        )}
      </main>
      {isShowModal && seletedMovieId ? (
        <MovieModal onClose={closedModal} seletedMovieId={seletedMovieId} />
      ) : (
        ''
      )}
    </>
  );
};

export default Home;
