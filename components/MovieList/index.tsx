import style from './index.module.scss';
import MOCK_DATA from './mock';
import Image from 'next/image';

const MovieList = (): JSX.Element => {
  console.log('mock', MOCK_DATA);
  return (
    <main className={style.container}>
      {MOCK_DATA.map(({ Title, Year, imdbID, Type, Poster }) => (
        <div className={style.item} key={imdbID}>
          <Image
            src={Poster}
            alt="Image..."
            width={300}
            height={400}
            objectFit="none"
          />
          <div className={style.description}>
            <div className={style.title}>{Title}</div>
            <div className={style.year}>@{Year}</div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default MovieList;
