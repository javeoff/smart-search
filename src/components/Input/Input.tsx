import { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => <SInput {...props} />;

const SInput = styled.input`
  box-sizing: border-box;
  padding: 10px 10px;
  font-size: 0.9em;
  border: 0;
  border-radius: 2px;
  outline: none;
  width: 100%;
  background-color: #2b2b2b;
  color: #eee;
`;
