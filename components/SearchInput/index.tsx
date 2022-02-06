import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { ISearchInput } from '@/utils/interfaces/common';
import style from './index.module.scss';
import { useRouter } from 'next/router';
import MOVIELIST from './MOVIELIST';

const SearchInput = ({ inputSubmitEvent }: ISearchInput): JSX.Element => {
  const [userInput, setUserInput] = useState('');
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputSubmitEvent && inputSubmitEvent(userInput);
  };

  useEffect(() => {
    setUserInput('');
  }, [router]);

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
