import CommonView from '@/components/CommonView';
import { IMovieList } from 'types/interfaces/movies';
import style from './index.module.scss';
import empty from '@/public/empty.png';
import Image from 'next/image';
import PagiNation from '@/components/PagiNation';
import MUIPagiNation from '@/components/MUIPagiNation';

const MovieList = ({
  posts,
  page,
  totalLength,
  onClickPagiNation,
  onClickModalHanlder,
}: IMovieList): JSX.Element => {
  return (
    <>
      {posts ? (
        <main className={style.container}>
          {posts.map(({ Title, Year, imdbID, Poster }) => (
            <div
              className={style.item}
              key={imdbID}
              onClick={() => onClickModalHanlder(imdbID)}
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
      {totalLength ? (
        <MUIPagiNation
          totalLength={totalLength}
          page={page}
          onClickPagiNation={onClickPagiNation}
          limit={10}
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
