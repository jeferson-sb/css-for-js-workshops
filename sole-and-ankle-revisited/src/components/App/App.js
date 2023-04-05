import React from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';

import { QUERIES, COLORS, WEIGHTS } from '../../constants';
import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const appTheme = {
  queries: QUERIES,
  colors: COLORS,
  weights: WEIGHTS,
};

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <ThemeProvider theme={appTheme}>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </ThemeProvider>
  );
};

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
