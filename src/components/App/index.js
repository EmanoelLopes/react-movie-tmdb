import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes';
import { GlobalStyle } from 'utils/styled';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
import ScrollToTop from 'HOC/ScrollToTop';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop>
          <React.Fragment>
            <Header />
            <Main>
              <Routes />
            </Main>
            <Footer />
          </React.Fragment>
        </ScrollToTop>
      </BrowserRouter>
    </React.Fragment>
  );
}

export { App };
