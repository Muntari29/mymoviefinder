import { useCallback, useEffect, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import style from './index.module.scss';

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const onClickHandler = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  });

  return (
    <BsFillArrowUpCircleFill
      className={style.wrapper}
      onClick={onClickHandler}
      style={{ display: visible ? 'block' : 'none' }}
    />
  );
};

export default ScrollTopButton;
