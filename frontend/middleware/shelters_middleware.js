import { ShelterConstants,
          receiveShelters
        } from '../actions/shelters_actions';
import { fetchShelters } from '../util/shelter_api_util';

const SheltersMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case ShelterConstants.REQUEST_SHELTERS:
      const success = shelters => dispatch(receiveShelters(shelters));
      console.log('time to fetch shelters!');
      const filters = {"bounds": {
          "northEast": {"lat": "37.80971", "lng":"-122.39208"},
          "southWest": {"lat": "37.74187", "lng": "-122.47791"}
        }};
      fetchShelters(filters, success);
      break;
    default:
      next(action);
  }
}

export default SheltersMiddleware;
