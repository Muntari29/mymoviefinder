import CommonView from '@/components/CommonView';
import { IMovieList } from '@/utils/interfaces/movies';
import style from './index.module.scss';
import empty from '@/public/empty.png';
import Image from 'next/image';
import PageNation from '@/components/PageNation';
import { MouseEventHandler, useCallback, useEffect, useState } from 'react';
import { getSearchMovieData } from '@/pages/api/movie';
import { useRouter } from 'next/router';

const MovieList = ({ movieTitle, onClick }: IMovieList): JSX.Element => {
  const [list, setList] = useState([]);
  // 페이지당 게시물 수
  const [limit, setLimiit] = useState(10);
  // 현재 페이지 번호
  const [currentPage, setCurrentPage] = useState(1);
  // 첫 게시물의 위치
  const offset = (currentPage - 1) * limit;
  // 총 개신물 수
  const [totalPosts, setTotalPosts] = useState(1);
  const router = useRouter();

  const searchMovieData = useCallback(async () => {
    if (movieTitle) {
      const { Search: data, totalResults: total } = await getSearchMovieData(
        movieTitle
      );
      console.log(total);
      setTotalPosts(parseInt(total, 10));
      setList(data);
    }
  }, [movieTitle]);

  useEffect(() => {
    searchMovieData();
  }, [searchMovieData]);

  const updateMovieData: MouseEventHandler = async (e) => {
    if (!movieTitle) return;
    const selectedPageNumber = parseInt((e.target as HTMLLIElement).id, 10);
    if (currentPage !== selectedPageNumber) {
      setCurrentPage(selectedPageNumber);
      const { Search: data } = await getSearchMovieData(
        movieTitle,
        selectedPageNumber
      );
      setList(data);
    }
    console.log('cureentPage', selectedPageNumber);
  };

  return list ? (
    <>
      <main className={style.container}>
        {list.map(({ Title, Year, imdbID, Type, Poster }) => (
          <div
            className={style.item}
            key={imdbID}
            onClick={() => onClick(imdbID)}
          >
            <Image
              src={
                Poster !== 'N/A'
                  ? Poster
                  : 'https://cdn.pixabay.com/photo/2021/08/21/08/09/ban-6562104_640.png'
              }
              alt="Image..."
              width={300}
              height={400}
              objectFit="fill"
            />
            <div className={style.description}>
              <div className={style.title}>{Title}</div>
              <div className={style.year}>@{Year}</div>
            </div>
          </div>
        ))}
      </main>
      <PageNation totalPosts={totalPosts} updateMovieData={updateMovieData} />
    </>
  ) : (
    <CommonView
      src={empty}
      width={80}
      height={80}
      text={'검색 결과가 없습니다.'}
    />
  );
};

export default MovieList;
