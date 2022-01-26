import style from './index.module.scss';
import MOCK_DATA from './mock';
import Image from 'next/image';
import { useState } from 'react';
import { ImovieData, IMovieList } from '@/utils/interfaces/movies';

const MovieList = ({ getData }: IMovieList): JSX.Element => {
  const [movieData, setMovieData] = useState<ImovieData[]>(getData);
  console.log(getData);
  return (
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
  );
};

export default MovieList;
