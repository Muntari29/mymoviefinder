import { IgetOneMovieData, IMovieModal } from '@/utils/interfaces/movies';
import {
  MouseEventHandler,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { getDetailMovieData } from '@/pages/api/movie';
import style from './index.module.scss';
import Image from 'next/image';

const MovieModal = ({ seletedMovieId, onClose }: IMovieModal): JSX.Element => {
  const [getOneMovieData, setGetOneMovieData] =
    useState<IgetOneMovieData | null>(null);

  const initModal = useCallback(async () => {
    const data = await getDetailMovieData(seletedMovieId);
    reszieImage(data);
  }, [seletedMovieId]);

  useEffect(() => {
    initModal();
  }, [initModal]);

  const reszieImage = (data: IgetOneMovieData) => {
    const posterArray = data.Poster.split('_');
    const sizeIndex = posterArray.indexOf('SX300.jpg');
    posterArray[sizeIndex] = 'SX700.jpg';
    const resizePosterUrl = posterArray.join('_');
    data.Poster = resizePosterUrl;
    setGetOneMovieData(data);
  };

  const handlClickClosedModal: MouseEventHandler = useCallback(
    (e) => {
      const seletedId = (e.target as HTMLDivElement).id;
      if (seletedId === 'mask') onClose();
    },
    [onClose]
  );

  // 추후 hook으로 분리하기.
  const handleModal = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleModal);
    return () => {
      window.removeEventListener('keydown', handleModal);
    };
  }, [handleModal]);

  return (
    <div id="mask" className={style.mask} onClick={handlClickClosedModal}>
      {getOneMovieData && (
        <div className={style.container}>
          <div className={style.section}>
            <Image
              src={getOneMovieData.Poster}
              width="100%"
              height="100%"
              objectFit="contain"
              layout="responsive"
              alt={'Poster...'}
            />
            <div className={style.header}>
              <div>{getOneMovieData.Title}</div>
            </div>
            <div className={style.body}>
              <div>평점 : {getOneMovieData.imdbRating}</div>
              <div className={style.actors}>
                출연 : {getOneMovieData.Actors}
              </div>
              <div>상영일 : {getOneMovieData.Released}</div>
              <div>상영시간 : {getOneMovieData.Runtime}</div>
            </div>
            <div className={style.footer}>
              <div>줄거리</div>
              <div>{getOneMovieData.Plot}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieModal;
