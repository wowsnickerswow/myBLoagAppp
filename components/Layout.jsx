import React from 'react';
import HeaderBurger from './HeaderBurger';

const Layout = ({ children }) => (
  <>
    <HeaderBurger />
    {children}
  </>
);

export default Layout;
