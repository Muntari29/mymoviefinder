import CommonView from '@/components/CommonView';
import { ImovieData, IMovieList } from 'types/interfaces/movies';
import style from './index.module.scss';
import empty from '@/public/empty.png';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { getSearchMovieData } from '@/pages/api/movie';
import PagiNation from '@/components/PagiNation';
import MUIPagiNation from '@/components/MUIPagiNation';

const MovieList = ({ movieTitle, onClick }: IMovieList): JSX.Element => {
  const limit = 10;
  const [page, setPage] = useState(1);
  const [postLength, setPostLength] = useState(0);
  const [posts, setPosts] = useState<ImovieData[]>([]);
  const [pervMovieTitle, setPrevMovieTitle] = useState(movieTitle);

  const searchMovieData = useCallback(async () => {
    if (pervMovieTitle) {
      if (pervMovieTitle !== movieTitle) {
        setPrevMovieTitle(movieTitle);
        setPage(1);
      }
      const data = await getSearchMovieData(pervMovieTitle, page);
      if (data) {
        setPostLength(parseInt(data.totalResults, 10));
        setPosts(data.Search);
      }
    }
  }, [movieTitle, page, pervMovieTitle]);

  useEffect(() => {
    searchMovieData();
  }, [searchMovieData]);

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
      {postLength ? (
        <MUIPagiNation
          postLength={postLength}
          page={page}
          setPage={setPage}
          limit={limit}
        />
      ) : (
        // <PagiNation
        //   postLength={postLength}
        //   page={page}
        //   setPage={setPage}
        //   limit={limit}
        // />
        <></>
      )}
    </>
  );
};

export default MovieList;
