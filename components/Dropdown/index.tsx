import style from './index.module.scss';

const Dropdown = () => {
  return (
    <div className={style.dropdown}>
      <ul>
        <li>
          <a
            href="https://github.com/Muntari29"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://codermun-log.tistory.com"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
