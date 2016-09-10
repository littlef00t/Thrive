import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
// import RootMiddleware from '../middleware/root_middleware';
import thunk from 'redux-thunk';
import { apiMiddleware, CALL_API } from 'redux-api-middleware';

const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

const configureStore = (preloadedState = {shelters: []}) => (
  createStoreWithMiddleware(
    RootReducer,
    preloadedState
    // RootMiddleware
    // applyMiddleware(thunk)
  )
);

export default configureStore;
