import { ShelterConstants } from '../actions/shelters_actions';

const SheltersReducer = function (state = {}, action) {
  switch(action.type){
    case ShelterConstants.RECEIVE_SHELTERS:
      console.log('in shelters reducer...');
      console.log(action.shelters);
      return action.shelters;
    default:
      return state;
  }
}

export default SheltersReducer;
