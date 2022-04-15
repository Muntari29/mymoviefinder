import SelectBox from '@/components/SelectBox';
import Dropdown from '@/components/Dropdown';
import profile from '@/public/muntari.png';
import logo from '@/public/movieLogo.png';
import style from './index.module.scss';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <header className={style.navbar}>
      <div className={style.container}>
        <div className={style.logo}>
          <Link href="/">
            <a>
              <Image
                src={logo}
                alt="Picture of the Logo."
                width="100%"
                height="100%"
              />
            </a>
          </Link>
        </div>
        <div className={style.categories}>
          <Link href="/">
            <a>홈</a>
          </Link>
          <Link href="#">
            <a>시리즈</a>
          </Link>
          <Link href="#">
            <a>요즘 대세</a>
          </Link>
          <Link href="#">
            <a>내가 찜한 컨텐츠</a>
          </Link>
          <SelectBox />
        </div>
        <div
          className={style.developer}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <Link href="#">
            <a>
              <Image
                className={style.profileImage}
                src={profile}
                alt="MUNTARI"
                width="100%"
                height="100%"
              />
            </a>
          </Link>
          {isHover ? <Dropdown /> : ''}
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
