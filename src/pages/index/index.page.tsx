import { NextPage } from 'next';
import styled, { css } from 'styled-components';
import range from 'lodash/range';
import nightmare from 'nightmare';

import { Result } from '@components/Result/Result';
import { LeftSidebar } from '@components/LeftSidebar/LeftSidebar';
import { RightSidebar } from '@components/RightSidebar/RightSidebar';
import { useInput } from '@pages/index/hooks/useInput';
import { SearchInput } from '@components/SearchInput/SearchInput';
import { initialResult } from '@common/utils/initialResult';

const IndexPage: NextPage = () => {
  const inputParams = useInput();

  return (
    <div>
      <SearchInput {...inputParams} />
      <SResultsWrapper
        withMarginTop={inputParams.isFixedTop}
        inputHeight={inputParams.inputHeight + 5}
      >
        <SResultsRow>
          <SLeftSidebar
            top={
              inputParams.isShown && inputParams.isFixedTop
                ? inputParams.inputHeight + 10
                : undefined
            }
          >
            <LeftSidebar />
          </SLeftSidebar>
          <SContainer>
            {range(20).map((idx) => (
              <Result key={idx} {...initialResult} />
            ))}
          </SContainer>
          <SRightSidebar>
            <RightSidebar />
          </SRightSidebar>
        </SResultsRow>
      </SResultsWrapper>
    </div>
  );
};

export default IndexPage;

IndexPage.getInitialProps = async (ctx) => {
  const { search } = ctx.query;

  // eslint-disable-next-line no-console
  console.log(search);

  // nightmare
  //   .goto('https://duckduckgo.com')
  //   .type('#search_form_input_homepage', search)
  //   .click('#search_button_homepage')
  //   .wait('#r1-0 a.result__a')
  //   .evaluate(() => document.querySelector('#r1-0 a.result__a').href)
  //   .end()
  //   .then(console.log)
  //   .catch(error => {
  //     console.error('Search failed:', error)
  //   })
  //
  // console.dir(results, { depth: null, colors: true });

  return {};
};

const SContainer = styled.div`
  max-width: 640px;
  width: 100%;
  margin: 0 auto;
`;

const SResultsWrapper = styled.div<{
  withMarginTop: boolean;
  inputHeight: number;
}>`
  padding: 10px 0;
  min-height: 100vh;
  background-color: #2b2b2b;

  ${({ withMarginTop, inputHeight }) =>
    withMarginTop &&
    css`
      padding-top: ${inputHeight}px;
    `}
`;

const SResultsRow = styled.div`
  display: flex;
  flex-wrap: wrap;

  & ${SContainer} > *:not(:first-child) {
    margin-top: 20px;
  }
`;

const SSidebar = styled.div<{ top?: number }>(
  ({ top = 10 }) => css`
    flex: 1;

    & > div {
      transition: 0.5s;
      top: ${top}px;
    }
  `,
);

const SLeftSidebar = styled(SSidebar)`
  & > div {
    margin: 0 20px;
    float: right;
  }
`;

const SRightSidebar = styled(SSidebar)`
  & > div {
    margin: 0 20px;
    float: left;
  }
`;
