import { getSearchMovieData } from '@/pages/api/movie';
import Debounce from '@/utils/Debounce';
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ImovieData } from 'types/interfaces/movies';

const useInfiniteScroll = ({ movieTitle, posts }: any) => {
  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(2);
  const [res, setRes] = useState<ImovieData[]>(posts);

  const observer: IntersectionObserver = new IntersectionObserver(
    (entries, observer) => {
      //배열 내의 데이터에는 isIntersecting이라는 프로퍼티를 통해 화면에 노출되었는지를 확인
      console.log('처음로드될떄 같이 로드됨2');
      console.log(entries);
      if (!entries[0].isIntersecting) return;
      api();
      console.log('22222');
      observer.disconnect();
    },
    {
      threshold: 0.9,
    }
  );

  const api = useCallback(async () => {
    console.log('api');
    if (movieTitle) {
      const res = await getSearchMovieData(movieTitle, page);
      if (res) {
        console.log('res', 'api');
        setRes((prev: any) => [...prev, ...res.Search]);
        console.log(page, 92929);
      }
    }
  }, [movieTitle, page]);

  useEffect(() => {
    setPage((prev) => prev + 1);
  }, [res]);

  // useEffect(() => {
  //   console.log('useEffect');
  //   if (page !== 1) Debounce(api, 1000);
  // }, [api, page]);

  useEffect(() => {
    if (
      // page === 1 ||
      containerRef.current === null ||
      containerRef.current.children.length === 0
    ) {
      console.log('3333333');
      return;
    }
    console.log('처음 로드 될떄1');
    console.log(containerRef.current.children);
    observer.observe(
      containerRef.current.children[containerRef.current.children.length - 1]
    );
  }, [res]);

  return {
    containerRef,
    postList: res,
  };
};

export default useInfiniteScroll;
