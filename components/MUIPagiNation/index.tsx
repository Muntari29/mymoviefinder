import { IPageNation } from 'types/interfaces/common';
import { Pagination } from '@mui/material';
import style from './index.module.scss';
import { useCallback, useMemo, useState } from 'react';

const MUIPagiNation = ({
  totalLength,
  onClickPagiNation,
  limit,
  page,
}: IPageNation) => {
  const [currentPage, setCurrentPage] = useState(page);
  const totalPage = useMemo(
    () => Math.ceil(totalLength / limit),
    [limit, totalLength]
  );

  const handleCurrentPage = useCallback(
    (e: React.ChangeEvent<unknown>, number: number) => {
      onClickPagiNation(number);
      setCurrentPage(number);
    },
    [onClickPagiNation]
  );
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
