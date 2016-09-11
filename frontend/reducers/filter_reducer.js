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
      console.log(temp);
      return temp;
    default:
      return state;
  }
}

export default FilterReducer;
