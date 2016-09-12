import { FilterConstants } from '../actions/filter_actions';
import { assoc } from 'ramda';


const FilterReducer = function (state = { bounds: {} }, action) {
  switch(action.type){
    case FilterConstants.UPDATE_BOUNDS:
      return assoc('bounds', action.bounds, state)
      break;
    default:
      return state;
      break;
  }
}

export default FilterReducer;
