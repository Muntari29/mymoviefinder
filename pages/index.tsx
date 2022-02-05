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
import PageNation from '@/components/PageNation';

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
      <PageNation />
    </>
  );
};

export default Home;
