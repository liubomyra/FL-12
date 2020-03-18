import { createStore, applyMiddleware, compose } from 'redux';

// Logger with default options
import logger from 'redux-logger';

import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(logger))
  );
  return store;
}
