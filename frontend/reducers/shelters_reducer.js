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
      console.log('recieving shelters in reducer');
      return assoc('shelters', [action.shelters], state);
      break;
    default:
      return state;
  }
}

export default SheltersReducer;
