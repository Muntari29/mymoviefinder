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
  const numberOfPage = Math.ceil(postLength / limit);
  console.log('PageNation', postLength, limit, page, numberOfPage, offset);

  return (
    <footer className={style.container}>
      <Link href="#">
        <a>&laquo;</a>
      </Link>
      <Link href="#">
        <a>&lt;</a>
      </Link>
      <ul className={style.pageNation}>
        {Array(numberOfPage)
          .fill(0)
          .map((_, index) => (
            <li
              id={String(index + 1)}
              className={style.item}
              key={index}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </li>
          ))}
      </ul>
      <Link href="#">
        <a>&gt;</a>
      </Link>
      <Link href="#">
        <a>&raquo;</a>
      </Link>
    </footer>
  );
};

export default PageNation;
