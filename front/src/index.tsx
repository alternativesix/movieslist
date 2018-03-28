import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { ApolloProvider } from 'react-apollo';
import apolloClient from './utils/apolloClient';

function getRoot() {
  const root = document.getElementById('root');
  if (root == null) {
    throw new Error('No root element');
  }
  return root;
}

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  getRoot()
);

registerServiceWorker();
