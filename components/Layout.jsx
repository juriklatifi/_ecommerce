import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
<<<<<<< HEAD
        <title> Mad Tech</title>
=======
        <title>MAD Tech Store</title>
>>>>>>> 448061679c05ce4b8ba8c3ffd2a198dda4dab373
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout