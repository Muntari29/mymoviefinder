import { getDetailMovieData } from '@/pages/api/movie';
import { IgetOneMovieData, IMovieModal } from '@/utils/interfaces/movies';
import { useCallback, useEffect, useState } from 'react';
import style from './index.module.scss';

const MovieModal = ({ seletedMovieId, onClose }: IMovieModal): JSX.Element => {
  const [getOneMovieData, setGetOneMovieData] =
    useState<IgetOneMovieData | null>(null);

  const initModal = useCallback(async () => {
    const data = await getDetailMovieData(seletedMovieId);
    setGetOneMovieData(data);
    console.log(data);
  }, [seletedMovieId]);

  useEffect(() => {
    initModal();
  }, [initModal]);

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
    <div className={style.mask}>
      <div className={style.wrapper}>{seletedMovieId}</div>
    </div>
  );
};

export default MovieModal;
