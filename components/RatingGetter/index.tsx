import { IRatingGetter } from 'types/interfaces/movies';
import styled from '@emotion/styled';

const RatingGetter = ({ rating }: IRatingGetter) => {
  return (
    <StarWrapper>
      <BasicStar>
        {new Array(5).fill(1).map((_, index) => (
          <svg
            width="44"
            height="44"
            fill="#a0a0a0 "
            key={index}
            viewBox="0 0 44 44"
          >
            <g fillRule="evenodd">
              <path d="M22 33.444L9.83 42.327c-.784.572-1.842-.196-1.539-1.118l4.687-14.32L.769 18.06c-.787-.569-.383-1.812.588-1.81l15.067.033 4.624-14.34c.298-.924 1.606-.924 1.904 0l4.624 14.34 15.067-.033c.971-.002 1.375 1.241.588 1.81l-12.209 8.829 4.688 14.32c.302.922-.756 1.69-1.54 1.118L22 33.444z" />
            </g>
          </svg>
        ))}
        <ActiveStar activeWidth={rating * 22}>
          {new Array(5).fill(1).map((_, index) => (
            <svg
              width="44"
              height="44"
              fill="#ffdd63"
              key={index + 99}
              viewBox="0 0 44 44"
            >
              <g fillRule="evenodd">
                <path d="M22 33.444L9.83 42.327c-.784.572-1.842-.196-1.539-1.118l4.687-14.32L.769 18.06c-.787-.569-.383-1.812.588-1.81l15.067.033 4.624-14.34c.298-.924 1.606-.924 1.904 0l4.624 14.34 15.067-.033c.971-.002 1.375 1.241.588 1.81l-12.209 8.829 4.688 14.32c.302.922-.756 1.69-1.54 1.118L22 33.444z" />
              </g>
            </svg>
          ))}
        </ActiveStar>
      </BasicStar>
    </StarWrapper>
  );
};

const StarWrapper = styled.div`
  width: 220px;
  height: 48px;
`;

const BasicStar = styled.div`
  display: inline-block;
  position: relative;
  height: 44px;
`;

const ActiveStar = styled.div<{ activeWidth: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => (props.activeWidth ? `${props.activeWidth}px` : '0')};
  overflow: hidden;
  white-space: nowrap;
  height: 44px;
`;

export default RatingGetter;
