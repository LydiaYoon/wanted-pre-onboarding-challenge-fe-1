import { QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';

import rootReducer from './modules';
import { queryClient } from './reactQuery/reactQuery';

const store = createStore(rootReducer, composeWithDevTools());

const container = document.getElementById('app');
if (!container) throw new Error('Failed to find the root element');

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
