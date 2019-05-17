import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import Root from 'components/Root';
import * as serviceWorker from './serviceWorker';

const ROOT = document.getElementById('root');

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  ROOT
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
