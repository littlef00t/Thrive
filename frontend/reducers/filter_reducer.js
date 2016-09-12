import { FilterConstants } from '../actions/filter_actions';
import { assocPath, merge } from 'ramda';

const initialState = {
  shelters: [],
  filters: {
    bounds: {}
  }
};

const FilterReducer = function (state = initialState, action) {
  switch(action.type){
    case FilterConstants.UPDATE_BOUNDS:
      const temp = assocPath(['filters', 'bounds'], action.bounds, state)
      console.log('update bounds state', temp);
      return temp;
      break;
    default:
      return state;
      break;
  }
}

export default FilterReducer;
