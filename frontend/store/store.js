import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
// import RootMiddleware from '../middleware/root_middleware';
import thunk from 'redux-thunk';

const configureStore = (preloadedState = {shelters: []}) => (
  createStore(
    RootReducer,
    preloadedState,
    // RootMiddleware
    applyMiddleware(thunk)
  )
);

export default configureStore;
