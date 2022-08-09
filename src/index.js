import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import App from './App';

import rootReducer, { rootSaga } from './modules';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    {/* <ScrollToTop> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </ScrollToTop> */}
  </BrowserRouter>
);
