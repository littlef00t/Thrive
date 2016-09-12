import { ShelterConstants } from '../actions/shelters_actions';
import { assoc } from 'ramda';

const initialState = {
  shelters: [],
  filters: {
    bounds: {}
  }
};

const SheltersReducer = function (state = initialState, action) {
  switch(action.type){
    case ShelterConstants.RECEIVE_SHELTERS:
      console.log(state);
      return assoc('shelters', action.shelters, state);
      break;
    default:
      return state;
      break;
  }
}

export default SheltersReducer;
