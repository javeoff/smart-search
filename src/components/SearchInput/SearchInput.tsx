import { FC, KeyboardEvent, useRef } from 'react';
import styled, { css } from 'styled-components';

import { Input } from '@components/Input/Input';
import { IResult } from '@pages/index/hooks/useInput';

export const SearchInput: FC<IResult> = ({
  isFullScale,
  isFixedTop,
  isShown,
  onFullScaleSearch,
  inputHeight,
}) => {
  const searchInputRef = useRef<HTMLDivElement | null>(null);
  const onEnterPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (
      e.currentTarget.value.trim() !== '' &&
      e.key === 'Enter' &&
      isFullScale
    ) {
      onFullScaleSearch();
    }
  };

  return (
    <SWrapper
      ref={searchInputRef}
      isFullScale={isFullScale}
      isFixedTop={isFixedTop}
      isShown={isShown}
      inputHeight={inputHeight}
    >
      <SContainer>
        <SInputCover isActive={isFullScale}>
          <Input placeholder='Найти все...' onKeyPress={onEnterPress} />
        </SInputCover>
      </SContainer>
    </SWrapper>
  );
};

const SWrapper = styled.div<{
  isFullScale: boolean;
  isShown: boolean;
  isFixedTop: boolean;
  inputHeight: number;
}>(
  ({ isFixedTop, inputHeight, isShown, isFullScale }) => css`
    position: fixed;
    top: 0;
    transition: top 0.5s, height 0.5s;
    z-index: 1;
    box-sizing: border-box;
    background-color: #181818;
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #282828;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6.4%;

    ${isFixedTop
      ? css`
          height: 6.4%;
        `
      : css`
          position: initial;
        `}

    ${!isShown &&
    css`
      top: -${inputHeight}px;
    `}

  ${isFullScale &&
    css`
      height: 100%;
      background-color: #181818;

      & input {
        margin: auto;
        font-size: 24px;
        border-radius: 5px;
        padding: 20px;
        width: 100%;
        max-width: 800px;
      }
    `}
 \`
  `,
);

const SInputCover = styled.div<{ isActive: boolean }>`
  width: 100%;
  top: 0;
  left: 0;
`;

const SContainer = styled.div`
  max-width: 640px;
  width: 100%;
  margin: 0 auto;
`;
