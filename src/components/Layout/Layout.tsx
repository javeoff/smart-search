import { FC } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const defaultTheme = {
  color: '#fff',
};

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }
  
  * {
    font-family: sans-serif;
  }
`;

export const Layout: FC = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
