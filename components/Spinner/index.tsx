import style from './index.module.scss';
import spin from '@/public/spin.gif';
import Image from 'next/image';

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
export default Spinner;
