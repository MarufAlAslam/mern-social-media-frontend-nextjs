// components/Layout.js
import React from 'react';
// import Header from '../components/header';
// import Footer from '../components/footer';

const Layout = ({ children }) => {
  return (
    <>
        {/* <Header/> */}
        <h2>header here</h2>
        <main style={{ flexGrow: 1 }}>{children}</main>
        {/* <Footer/> */}
        <h2>footer here</h2>
    </>
  );
};

export default Layout;