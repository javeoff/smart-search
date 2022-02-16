import { useEffect, useRef } from 'react';
import { useSetState, useWindowScroll } from 'react-use';

export interface IResult {
  isFullScale: boolean;
  isFixedTop: boolean;
  isShown: boolean;

  inputHeight: number;

  onFullScaleSearch(): void;
}

export const useInput = (): IResult => {
  const inputHeight = 58;
  const [state, setState] = useSetState({
    isFullScale: true,
    isFixedTop: true,
    isShown: true,
  });

  const prevScrollY = useRef(1);
  const isScrollUp = useRef(false);

  useEffect(() => {
    const onScroll = (): void => {
      if (prevScrollY.current > window.scrollY) {
        isScrollUp.current = true;
      } else if (prevScrollY.current < window.scrollY) {
        isScrollUp.current = false;
      }

      prevScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const { y: scrollY } = useWindowScroll();
  const staticIsVisible = inputHeight && scrollY <= inputHeight;
  const isTop = scrollY <= 1;

  const onFullScaleSearch = (): void => {
    setState({ isFullScale: false });

    setTimeout(() => {
      if (isTop) {
        setState({ isFixedTop: false });
      }
    }, 600);
  };

  useEffect(() => {
    if (!staticIsVisible && !state.isFullScale && !isScrollUp.current) {
      setState({ isShown: false });

      setTimeout(() => {
        setState({ isFixedTop: true });
      }, 600);
    }

    if (!staticIsVisible && isScrollUp.current && !state.isShown) {
      setState({ isShown: true });
    }

    if (isTop && !state.isFullScale) {
      setState({ isFixedTop: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollY]);

  return {
    ...state,
    inputHeight,
    onFullScaleSearch,
  };
};
