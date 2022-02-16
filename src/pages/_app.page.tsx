import { NextPage } from 'next';
import { AppContext } from 'next/app';

import { Layout } from '@components/Layout/Layout';

const App: NextPage<AppContext> = ({ Component }) => (
  <Layout>
    <Component />
  </Layout>
);

export default App;
