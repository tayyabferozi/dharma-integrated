import React from 'react';
import NavBar from '../../additionalResources/template/navBar/NavBar';
import Footer from '../../additionalResources/template/footer/Footer';

const MainView = (props) => {
  const { children } = props;

  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};

export default MainView;
