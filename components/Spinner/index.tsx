import style from './index.module.scss';
import spin from '@/public/spin.svg';
import Image from 'next/image';
import React from 'react';

const Spinner = () => {
  return (
    <div className={style.wrapper}>
      <Image
        className={style.spinner}
        src={spin}
        width={120}
        height={120}
        alt={'spinner...'}
      />
    </div>
  );
};
export default React.memo(Spinner);
