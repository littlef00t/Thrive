import { combineReducers } from 'redux';
import SheltersReducer from './shelters_reducer';
import FilterReducer from './filter_reducer';

const RootReducer = combineReducers({
  shelters: SheltersReducer,
  filters: FilterReducer
});

export default RootReducer;
