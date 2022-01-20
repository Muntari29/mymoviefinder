import style from './index.module.scss';

const SelectBox = (): JSX.Element => {
  return (
    <>
      <label htmlFor="home-select" />
      <select id="home-select" name="mune" className={style.select}>
        <option value="">매뉴</option>
        <option value="home">홈</option>
        <option value="series">시리즈</option>
        <option value="trend">요즘 대세</option>
        <option value="likes">내가 찜한 콘텐츠</option>
      </select>
    </>
  );
};

export default SelectBox;
