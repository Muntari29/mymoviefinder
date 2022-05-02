import { getSearchMovieData } from '@/pages/api/movie';
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
  const nextPage = useRef<number>(2);
  const [postList, setPostList] = useState<ImovieData[]>(posts);

  const observer: IntersectionObserver = new IntersectionObserver(
    (entries, observer) => {
      //배열 내의 데이터에는 isIntersecting이라는 프로퍼티를 통해 화면에 노출되었는지를 확인
      if (!entries[0].isIntersecting) return;
      getNextPageMoiveData();
      observer.disconnect();
    },
    {
      threshold: 0.9,
    }
  );

  const getNextPageMoiveData = useCallback(async () => {
    if (movieTitle) {
      const res = await getSearchMovieData(movieTitle, nextPage.current);
      if (res?.Response === 'True') {
        setPostList((prev: ImovieData[]) => [...prev, ...res.Search]);
        nextPage.current += 1;
      } else {
        alert(`더 이상 ${movieTitle}에 대한 검색결과가 존재하지 않습니다.`);
      }
    }
  }, [movieTitle]);

  useEffect(() => {
    if (
      containerRef.current === null ||
      containerRef.current.children.length === 0
    )
      return;

    // 관측할 요소로 해당 데이터의 가장 마지막 요소를 관측하는 것으로 갱신함.
    // 이로인해 별도 하단 div 사용하지 않고도 구현할 수 있게됨.
    observer.observe(
      containerRef.current.children[containerRef.current.children.length - 1]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postList]);

  return {
    containerRef,
    postList,
  };
};

export default useInfiniteScroll;
