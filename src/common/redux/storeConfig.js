import rootReducer from './rootReducer';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function storeConfig() {
  let storeEnhancer = undefined;
  if (process.env.NODE_ENV !== 'PRODUCTION') {
    storeEnhancer = composeWithDevTools(
      applyMiddleware(createLogger({
        collapsed: true
      }), logger))
  }

  return createStore(rootReducer, storeEnhancer);
}

function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}
