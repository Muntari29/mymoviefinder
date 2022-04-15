import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { ISearchInput } from 'types/interfaces/common';
import style from './index.module.scss';
import { useRouter } from 'next/router';
import MOVIELIST from './MOVIELIST';
import React from 'react';

const SearchInput = ({ onSubmit }: ISearchInput) => {
  const [userInput, setUserInput] = useState('');
  const router = useRouter();

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setUserInput(e.target.value);
  }, []);

  const onSubmitHandler = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit && onSubmit(userInput);
    },
    [onSubmit, userInput]
  );

  useEffect(() => {
    setUserInput('');
  }, [router]);

  return (
    <>
      <div className={style.container}>
        <form onSubmit={onSubmitHandler}>
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

export default React.memo(SearchInput);
