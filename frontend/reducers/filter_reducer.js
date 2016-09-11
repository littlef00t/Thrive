import { FilterConstants } from '../actions/filter_actions';

const defaultState = {
  benches: {},
  filters: {
    bounds: {}
  }
};

const FilterReducer = function (state = defaultState, action) {
  switch(action.type){
    case FilterConstants.UPDATE_BOUNDS:
      console.log('in filter reducer', action.bounds);
    default:
      return state;
  }
}

export default FilterReducer;
