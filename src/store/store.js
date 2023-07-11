import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
//! Warning about createStore. It is no longer used. They use configureStore instead. Research is needed on this.
//? Upon Googling this, I found using the legacy_createStore as createStore will remove the warning indicator.
//* import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log('type: ', action.type);
  console.log('payload: ', action.payload);
  console.log('currentState: ', store.getState());

  next(action);

  console.log('next state: ', store.getState());
};

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);