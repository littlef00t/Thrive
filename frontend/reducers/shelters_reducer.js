import { ShelterConstants } from '../actions/shelters_actions';


const SheltersReducer = function (state = {}, action) {
  switch(action.type){
    case ShelterConstants.RECEIVE_SHELTERS:
      return action.shelters;
      break;
    default:
      return state;
      break;
  }
}

export default SheltersReducer;
