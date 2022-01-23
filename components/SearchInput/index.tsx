import { getSearchMovieData } from '@/pages/api/movie';
import { ChangeEvent, FormEvent, useState } from 'react';
import style from './index.module.scss';
import MOVIELIST from './MOVIELIST';

const SearchInput = (): JSX.Element => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { Search: data } = await getSearchMovieData(userInput);
  };
  return (
    <>
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="search-input" />
          <input
            id="search-input"
            className={style.itemInput}
            list="auto-options"
            name="title"
            value={userInput}
            type="text"
            placeholder="영화를 검색해주세요."
            onChange={handleChange}
          />
          <datalist id="auto-options" className={style.itemDataList}>
            {MOVIELIST.map((movie, index) => (
              <option key={index} value={movie} />
            ))}
          </datalist>
        </form>
      </div>
    </>
  );
};

export default SearchInput;
