import { combineReducers } from 'redux';
import SheltersReducer from './shelters_reducer';

const RootReducer = combineReducers({
  shelters: SheltersReducer
});

export default RootReducer;
