import { ShelterConstants,
          receiveShelters,
          requestShelters
        } from '../actions/shelters_actions';
import { fetchShelters } from '../util/shelter_api_util';
import { FilterConstants } from '../actions/filter_actions';

const SheltersMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case ShelterConstants.REQUEST_SHELTERS:
      const success = shelters => dispatch(receiveShelters(shelters));
      // const filters = {"bounds": {
      //     "northEast": {"lat": "37.80971", "lng":"-122.39208"},
      //     "southWest": {"lat": "37.74187", "lng": "-122.47791"}
      //   }};
      const filters = getState().filters.bounds;
      console.log(filters);
      fetchShelters(filters, success);
      break;
    case FilterConstants.UPDATE_BOUNDS:
      next(action);
      dispatch(requestShelters());
      break;
    default:
      next(action);
  }
}

export default SheltersMiddleware;
