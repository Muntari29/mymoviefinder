import MovieList from '@/components/domain/MovieList';
import SearchInput from '@/components/SearchInput';
import CommonView from '@/components/CommonView';
import MovieModal from '@/components/MovieModal';
import Header from '@/components/domain/Header';
import { useCallback, useEffect, useState } from 'react';
import Spinner from '@/components/Spinner';
import { useRouter } from 'next/router';
import { ImovieData } from 'types/interfaces/movies';
import { getSearchMovieData } from './api/movie';

const Home = (): JSX.Element => {
  const [seletedMovieId, setSeletedMovieId] = useState<string | null>(null);
  const [movieTitle, setMovieTitle] = useState<string>('');
  const [isShowModal, setIsShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInit, setIsInit] = useState(false);
  const [posts, setPosts] = useState<ImovieData[]>([]);
  const [page, setPage] = useState(1);
  const [totalLength, setTotalLength] = useState(0);
  const router = useRouter();

  const onInputSubmitGetAllAPI = async (title: string) => {
    setIsLoading(true);
    setMovieTitle(title);
    setPage(1);
    const data = await getSearchMovieData(title);
    if (data) {
      const { Search, totalResults } = data;
      setTotalLength(parseInt(totalResults, 10));
      setPosts(Search);
    }
    setIsInit(true);
    setIsLoading(false);
  };

  const onClickGetDetailAPI = useCallback(
    async (pageNumber: number) => {
      setIsLoading(true);
      setPage(pageNumber);
      const data = await getSearchMovieData(movieTitle, pageNumber);
      if (data) {
        const { Search } = data;
        setPosts(Search);
      }
      setIsLoading(false);
    },
    [movieTitle]
  );

  const openModal = (movieId: string) => {
    console.log('start');
    setSeletedMovieId(movieId);
    setIsShowModal(true);
    console.log('ent');
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
        <SearchInput onSubmit={onInputSubmitGetAllAPI} />
        {isLoading ? (
          <Spinner />
        ) : isInit ? (
          <MovieList
            posts={posts}
            page={page}
            totalLength={totalLength}
            onClickModalHanlder={openModal}
            onClickPagiNation={onClickGetDetailAPI}
          />
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
