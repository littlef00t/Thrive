import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from '../reducers/root_reducer';
import RootMiddleware from '../middleware/root_middleware';
// import thunk from 'redux-thunk';
// import { apiMiddleware, CALL_API } from 'redux-api-middleware';

//playing around with apimiddleware
// const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

const defaultState = {
  shelters: {},
  filters: {
    bounds: {}
  }
};

const configureStore = (preloadedState = defaultState) => (
  createStore(
    RootReducer,
    preloadedState,
    compose ( RootMiddleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f )
    // applyMiddleware(thunk)
  )
);

export default configureStore;
