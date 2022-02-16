import { FC } from 'react';
import styled from 'styled-components';

export const RightSidebar: FC = () => (
  <SWrapper>
    <SCard>123</SCard>
  </SWrapper>
);

const SWrapper = styled.div``;

const SCard = styled.div`
  box-sizing: border-box;
  padding: 20px 10px;
  background-color: #393939;
  border: 1px solid #404244;
  color: #bdbdbd;
  border-radius: 2px;
  width: 400px;
  height: 200px;
`;
