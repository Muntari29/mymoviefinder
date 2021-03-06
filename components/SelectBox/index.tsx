import React from 'react';
import style from './index.module.scss';

const SelectBox = () => {
  return (
    <>
      <label htmlFor="home-select" />
      <select id="home-select" name="mune" className={style.select}>
        <option value="">매뉴</option>
        <option value="home">홈</option>
        <option value="series">시리즈</option>
        <option value="trend">요즘 대세</option>
        <option value="likes">내가 찜한 콘텐츠</option>
      </select>
    </>
  );
};

export default React.memo(SelectBox);
