import style from './index.module.scss';
import MOVIELIST from './MOVIELIST';

const SearchInput = (): JSX.Element => {
  return (
    <>
      <div className={style.container}>
        <label htmlFor="search-input" />
        <input
          id="search-input"
          className={style.itemInput}
          list="auto-options"
          type="search"
          placeholder="영화를 검색해주세요."
        />
        <datalist id="auto-options" className={style.itemDataList}>
          {MOVIELIST.map((movie, index) => (
            <option key={index} value={movie} />
          ))}
        </datalist>
      </div>
    </>
  );
};

export default SearchInput;
