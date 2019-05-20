import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes';
import { GlobalStyle } from 'utils/styled';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
import Subheader from 'components/Subheader';
import locale from 'lang';

locale.init();

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Subheader />
          <Main>
            <Routes />
          </Main>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    </React.Fragment>
  );
}

export { App };
