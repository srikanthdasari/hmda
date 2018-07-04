import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

const configuredStore = configureStore();

ReactDOM.render(
  <Provider store={configuredStore}>
    <App  />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
