import { FC } from 'react';
import styled from 'styled-components';

import { SearchEngineType } from '@components/Result/enums/SearchEngineType';
import { getImageUrlBySearchEngineType } from '@components/Result/utils/getImageUrlBySearchEngineType';
import { getLinkPath } from '@components/Result/utils/getLinkPath';

interface IProps {
  searchEngine?: SearchEngineType;
  imageUrl?: string;
  link: string;
  title: string;
  description: string;
}

export const Result: FC<IProps> = ({
  searchEngine,
  imageUrl,
  link,
  title,
  description,
}) => (
  <SWrapper>
    <SReference>
      {searchEngine && (
        <img src={getImageUrlBySearchEngineType(searchEngine)} alt='icon' />
      )}
      {imageUrl && <img src={imageUrl} alt='icon' />}

      <div>{getLinkPath(link)}</div>
    </SReference>

    <STitle href='#'>{title}</STitle>

    <SDescription>{description}</SDescription>
  </SWrapper>
);

const SWrapper = styled.div`
  &:hover a {
    text-decoration: underline;
  }

  &:hover {
    cursor: pointer;
  }
`;

const SReference = styled.div`
  display: flex;
  height: 14px;
  color: #bdbdbd;

  & img {
    width: 16px;
  }

  & > *:not(:last-child) {
    margin-right: 5px;
  }

  & div {
    width: 100%;
    font-size: 14px;
    overflow: hidden;
  }
`;

const STitle = styled.a`
  display: block;
  margin-top: 5px;
  font-size: 18px;
  color: #eeeeee;
  text-decoration: none;
`;

const SDescription = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: #bdbdbd;
`;
