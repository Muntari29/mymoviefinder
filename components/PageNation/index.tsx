import { IPageNation } from '@/utils/interfaces/common';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import style from './index.module.scss';

const PageNation = ({ totalPosts, updateMovieData }: IPageNation) => {
  const [totalPage, setTotalPage] = useState(Math.ceil(totalPosts / 10));

  useEffect(() => {
    setTotalPage(Math.ceil(totalPosts / 10));
  }, [totalPosts]);
  console.log('totalpage', totalPage, totalPosts); // 33 323

  return (
    <footer className={style.container}>
      <Link href="#">
        <a>&laquo;</a>
      </Link>
      <Link href="#">
        <a>&lt;</a>
      </Link>
      <ul className={style.pageNation}>
        {[...Array(totalPage).keys()].map((page) => (
          <li
            id={String(page + 1)}
            className={style.item}
            key={page}
            onClick={updateMovieData}
          >
            {page + 1}
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
