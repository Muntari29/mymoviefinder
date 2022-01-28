import style from './index.module.scss';
import Image from 'next/image';
import movieLogo from '@/public/movieLogo.png';
import { ICommonView } from '@/utils/interfaces/common';

const CommonView = ({
  src = movieLogo,
  width,
  height,
  text,
}: ICommonView): JSX.Element => {
  return (
    <main className={style.common}>
      <Image src={src} alt="Empty Img..." width={width} height={height} />
      <div>{text}</div>
    </main>
  );
};

export default CommonView;
