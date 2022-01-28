import style from './index.module.scss';
import Image from 'next/image';
import logo from '@/public/movieLogo.png';
import profile from '@/public/muntari.png';
import Dropdown from '@/components/Dropdown';
import SelectBox from '@/components/SelectBox';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <header className={style.navbar}>
      <div className={style.container}>
        <div className={style.logo}>
          <Link href="/" passHref>
            <Image
              src={logo}
              alt="Picture of the Logo."
              width="100%"
              height="100%"
            />
          </Link>
        </div>
        <div className={style.categories}>
          <Link href="/">홈</Link>
          <Link href="#">시리즈</Link>
          <Link href="#">요즘 대세</Link>
          <Link href="#">내가 찜한 컨텐츠</Link>
          <SelectBox />
        </div>
        <div
          className={style.developer}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <Link href="#" passHref>
            <Image
              className={style.profileImage}
              src={profile}
              alt="MUNTARI"
              width="100%"
              height="100%"
            />
          </Link>
          {isHover ? <Dropdown /> : ''}
        </div>
      </div>
    </header>
  );
};

export default Header;
