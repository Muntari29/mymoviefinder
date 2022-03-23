import { IPageNation } from '@/utils/interfaces/common';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import style from './index.module.scss';

const PagiNation = ({
  postLength,
  setPage,
  limit,
  page,
  offset,
}: IPageNation) => {
  const totalPage = Math.ceil(postLength / limit); // 14
  const firstNumber = page - (page % limit) + 1; // 1 , 10page = > 11
  const lastNumber = page - (page % limit) + limit; // 10, 10page => 20
  // const groupId = Math.ceil(page / limit); // 1, 10page => 1, 11page => 2
  // const restPage = totalPage % 10; // 4
  const number = lastNumber > totalPage ? totalPage : lastNumber;
  const totalArray = postLength
    ? [...Array(totalPage).keys()].map((el) => el + 1)
    : [];

  console.log('PageNation', page, firstNumber, lastNumber, number);
  console.log(lastNumber > totalPage);

  return (
    <footer className={style.container}>
      <div onClick={() => setPage(1)}>&laquo;</div>
      <div onClick={() => setPage(page - 1)}>&lt;</div>
      <ul className={style.pageNation}>
        {totalArray.slice(firstNumber - 1, number).map((page, index) => (
          <li
            id={String(index + 1)}
            className={style.item}
            key={index}
            onClick={() => setPage(page)}
          >
            {page}
          </li>
        ))}
      </ul>
      <div onClick={() => setPage(page + 1)}>&gt;</div>
      <div onClick={() => setPage(totalPage)}>&raquo;</div>
    </footer>
  );
};

export default PagiNation;
