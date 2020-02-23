import React from 'react';

import Header from '~/layout/Header';

import { GlobalStyles, CustomPage } from './styles';

const Page = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    {children}
  </>
);

export default Page;
