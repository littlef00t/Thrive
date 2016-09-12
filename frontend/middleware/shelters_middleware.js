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
      const filters = getState().filters;
      fetchShelters(filters, success);
      break;
    case FilterConstants.UPDATE_BOUNDS:
      next(action);
      dispatch(requestShelters());
      break;
    default:
      next(action);
      break;
  }
}

export default SheltersMiddleware;
