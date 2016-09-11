import { FilterConstants } from '../actions/filter_actions';


const FilterReducer = function (state = {}, action) {
  switch(action.type){
    case FilterConstants.UPDATE_BOUNDS:
      return state;
    default:
      return state;
  }
}

export default FilterReducer;
