import { IPageNation } from '@/utils/interfaces/pageNation';
import Link from 'next/link';
import { useState } from 'react';
import style from './index.module.scss';

const PageNation = ({ totalResults = 123 }: IPageNation) => {
  const [totalPage, setTotalPage] = useState(Math.ceil(totalResults / 10));

  // console.log([...new Array(132).keys()]);
  // console.log(Math.ceil(123 / 10));
  console.log(totalPage);
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
          <li className={style.item} key={page}>
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
