import style from './index.module.scss';
import Image from 'next/image';
import empty from '@/public/empty.png';
import CommonView from '@/components/CommonView';
import { IMovieList } from '@/utils/interfaces/movies';

const MovieList = ({ movieData, onClick }: IMovieList): JSX.Element => {
  return movieData ? (
    <main className={style.container}>
      {movieData.map(({ Title, Year, imdbID, Type, Poster }) => (
        <div
          className={style.item}
          key={imdbID}
          onClick={() => onClick(imdbID)}
        >
          <Image
            src={Poster}
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
  );
};

export default MovieList;
