import style from './index.module.scss';
import Image from 'next/image';
import empty from '@/public/empty.png';
import { IMovieList } from '@/utils/interfaces/movies';

const MovieList = ({ movieData }: IMovieList): JSX.Element => {
  return movieData ? (
    <main className={style.container}>
      {movieData.map(({ Title, Year, imdbID, Type, Poster }) => (
        <a href="#" key={imdbID}>
          <div className={style.item}>
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
        </a>
      ))}
    </main>
  ) : (
    <main className={style.empty}>
      <Image src={empty} alt="Empty Img..." width={80} height={80} />
      <div>검색 결과가 없습니다.</div>
    </main>
  );
};

export default MovieList;
