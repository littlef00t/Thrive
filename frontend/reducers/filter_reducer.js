import { FilterConstants } from '../actions/filter_actions';
import { assocPath, merge } from 'ramda';


const FilterReducer = function (state = { bounds: {} }, action) {
  switch(action.type){
    case FilterConstants.UPDATE_BOUNDS:
      const temp = assoc('bounds', action.bounds, state)
      console.log('update bounds state', temp);
      return temp;
      break;
    default:
      return state;
      break;
  }
}

export default FilterReducer;
