import { ICommonView } from 'types/interfaces/common';
import movieLogo from '@/public/movieLogo.png';
import style from './index.module.scss';
import Image from 'next/image';
import React from 'react';

const CommonView = ({ src = movieLogo, width, height, text }: ICommonView) => {
  return (
    <main className={style.common}>
      <Image src={src} alt="Empty Img..." width={width} height={height} />
      <div>{text}</div>
    </main>
  );
};

export default React.memo(CommonView);
