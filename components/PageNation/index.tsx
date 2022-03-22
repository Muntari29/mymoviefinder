import { IPageNation } from '@/utils/interfaces/common';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import style from './index.module.scss';

const PageNation = ({
  postLength,
  setPage,
  limit,
  page,
  offset,
}: IPageNation) => {
  const totalPage = Math.ceil(postLength / limit);
  const firstNumber = page - (page % limit) + 1;
  const lastNumber = page - (page % limit) + limit;
  const groupId = Math.ceil(page / limit);
  const restPage = totalPage % 10;
  // const PageNationLength = page > 10 ?

  const formatTotalPage = () => {};

  console.log(
    'PageNation',
    page,
    totalPage,
    firstNumber,
    lastNumber,
    groupId,
    restPage
  );

  return (
    <footer className={style.container}>
      <div onClick={() => setPage(1)}>&laquo;</div>
      <div onClick={() => setPage(page - 1)}>&lt;</div>
      <ul className={style.pageNation}>
        {Array(lastNumber > totalPage ? restPage : 10)
          .fill(0)
          .map((_, index) => (
            <li
              id={String(index + 1)}
              className={style.item}
              key={index}
              onClick={() => setPage(index + 1)}
            >
              {(groupId - 1) * 10 + (index + 1)}
            </li>
          ))}
      </ul>
      <div onClick={() => setPage(page + 1)}>&gt;</div>
      <div onClick={() => setPage(totalPage)}>&raquo;</div>
    </footer>
  );
};

export default PageNation;
