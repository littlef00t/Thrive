import { ShelterConstants } from '../actions/shelters_actions';
import { fetchShelters } from '../util/shelter_api_util';

const SheltersMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case ShelterConstants.REQUEST_SHELTERS:
      const success = data => console.log(data);
      console.log('time to fetch shelters!');
      fetchShelters(success);
      break;
    case ShelterConstants.RECEIVE_SHELTERS:
      console.log('recieving shelters...');
      break;
    default:
      break;
  }
}

export default SheltersMiddleware;
