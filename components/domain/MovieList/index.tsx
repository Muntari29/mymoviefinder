import CommonView from '@/components/CommonView';
import { IMovieList } from '@/utils/interfaces/movies';
import style from './index.module.scss';
import empty from '@/public/empty.png';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { getSearchMovieData } from '@/pages/api/movie';
import { useRouter } from 'next/router';
import PagiNation from '@/components/PagiNation';

const MovieList = ({ movieTitle, onClick }: IMovieList): JSX.Element => {
  // 페이지당 게시물 수
  const [limit, setLimiit] = useState(10);
  // 현재 페이지 번호
  const [page, setPage] = useState(1);
  // 총 게시물 갯수
  const [postLength, setPostLength] = useState(0);
  const [posts, setPosts] = useState([]);
  const offset = (page - 1) * limit;

  const router = useRouter();

  const searchMovieData = useCallback(async () => {
    if (movieTitle) {
      const { Search: data, totalResults: total } = await getSearchMovieData(
        movieTitle,
        page
      );
      console.log(33, movieTitle, page);
      setPostLength(parseInt(total, 10));
      setPosts(data);
    }
  }, [movieTitle, page]);

  useEffect(() => {
    searchMovieData();
  }, [searchMovieData]);

  console.log('MovieList');

  return (
    <>
      {posts ? (
        <main className={style.container}>
          {posts.map(({ Title, Year, imdbID, Poster }) => (
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
      ) : (
        <CommonView
          src={empty}
          width={80}
          height={80}
          text={'검색 결과가 없습니다.'}
        />
      )}
      {posts && (
        <PagiNation
          postLength={postLength}
          page={page}
          setPage={setPage}
          limit={limit}
          offset={offset}
        />
      )}
    </>
  );
};

export default MovieList;
