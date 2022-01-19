import style from './index.module.scss';
import Image from 'next/image';
import logo from '../../public/movieLogo.png';
import profile from '../../public/muntari.png';
import Dropdown from '../Dropdown';
import SelectBox from '../SelectBox';
import { useState } from 'react';

const Header = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <header className={style.navbar}>
      <div className={style.container}>
        <div className={style.logo}>
          <a href="#">
            <Image
              src={logo}
              alt="Picture of the Logo."
              width="100%"
              height="100%"
            />
          </a>
        </div>
        <div className={style.categories}>
          <a href="#">홈</a>
          <a href="#">시리즈</a>
          <a href="#">요즘 대세</a>
          <a href="#">내가 찜한 컨텐츠</a>
          <SelectBox />
        </div>
        <div
          className={style.developer}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <a href="#">
            <Image
              className={style.profileImage}
              src={profile}
              alt="MUNTARI"
              width="100%"
              height="100%"
            />
          </a>
          {isHover ? <Dropdown /> : ''}
        </div>
      </div>
    </header>
  );
};

export default Header;
