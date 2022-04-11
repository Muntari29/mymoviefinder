import { IPageNation } from 'types/interfaces/common';
import { useCallback, useEffect, useState } from 'react';
import style from './index.module.scss';

const PagiNation = ({
  totalLength,
  onClickPagiNation,
  limit,
  page,
}: IPageNation) => {
  const totalPage = Math.ceil(totalLength / limit); // 14
  const firstNumber = page - (page % limit) + 1; // 1 , 10page = > 11
  const lastNumber = page - (page % limit) + limit; // 10, 10page => 20
  const finalNumber = lastNumber > totalPage ? totalPage : lastNumber;
  const totalArray = [...Array(totalPage).keys()].map((el) => el + 1);
  const [firstIndex, setFirstIndex] = useState(1);
  const [lastIndex, setLastIndex] = useState<number | null>(null);
  // const groupId = Math.ceil(page / limit); // 1, 10page => 1, 11page => 2
  // const restPage = totalPage % 10; // 4

  const handlePrevSetPage = () => {
    if (page !== 1) {
      onClickPagiNation(page - 1);
    }
  };

  const handleNextSetPage = () => {
    if (page !== totalPage) {
      onClickPagiNation(page + 1);
    }
  };

  const initPageIndex = useCallback(() => {
    if (page % limit !== 0) {
      setFirstIndex(firstNumber);
      setLastIndex(finalNumber);
    }
  }, [page, limit, firstNumber, finalNumber]);

  useEffect(() => {
    initPageIndex();
  }, [initPageIndex]);

  return totalLength ? (
    <footer className={style.container}>
      <div onClick={() => onClickPagiNation(1)}>&laquo;</div>
      <div onClick={handlePrevSetPage}>&lt;</div>
      <ul className={style.pageNation}>
        {lastIndex &&
          totalArray
            .slice(firstIndex - 1, lastIndex)
            .map((pageNumber, index) => (
              <li
                id={String(index + 1)}
                className={`${style.item} ${
                  page === pageNumber ? style.active : ''
                }`}
                key={index}
                onClick={() => onClickPagiNation(pageNumber)}
              >
                {pageNumber}
              </li>
            ))}
      </ul>
      <div onClick={handleNextSetPage}>&gt;</div>
      <div onClick={() => onClickPagiNation(totalPage)}>&raquo;</div>
    </footer>
  ) : (
    <></>
  );
};

export default PagiNation;
