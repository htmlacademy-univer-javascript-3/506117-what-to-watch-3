import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/common/app/app';
import {Info} from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App promoInfo={Info.promo} />
  </React.StrictMode>
);
