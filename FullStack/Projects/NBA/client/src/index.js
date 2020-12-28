import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import RouterFile from './RouterFile';
// import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <RouterFile />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
