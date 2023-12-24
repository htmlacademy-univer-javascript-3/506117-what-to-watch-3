import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/common/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchFilmsAction, fetchPromoAction } from './store/api-actions';
import { putGenreFilms } from './store/data/common-data/common-data';


store.dispatch(fetchFilmsAction()).then(
  () => store.dispatch(putGenreFilms())
);

store.dispatch(fetchPromoAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
