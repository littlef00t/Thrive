import { ShelterConstants,
          receiveShelters
        } from '../actions/shelters_actions';
import { fetchShelters } from '../util/shelter_api_util';

const SheltersMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case ShelterConstants.REQUEST_SHELTERS:
      const success = shelters => dispatch(receiveShelters(shelters));
      console.log('time to fetch shelters!');
      fetchShelters(success);
      break;
    default:
      next(action);
  }
}

export default SheltersMiddleware;
