import { IPageNation } from 'types/interfaces/common';
import { Pagination } from '@mui/material';
import style from './index.module.scss';
import { useState } from 'react';

const MUIPagiNation = ({ postLength, setPage, limit, page }: IPageNation) => {
  const [currentPage, setCurrentPage] = useState(page);
  const totalPage = Math.ceil(postLength / limit);

  const handleCurrentPage = (e: React.ChangeEvent<unknown>, number: number) => {
    setPage(number);
    setCurrentPage(number);
  };
  return (
    <Pagination
      className={style.pagiNation}
      count={totalPage}
      page={currentPage}
      color="primary"
      onChange={handleCurrentPage}
      showFirstButton
      showLastButton
    />
  );
};

export default MUIPagiNation;
