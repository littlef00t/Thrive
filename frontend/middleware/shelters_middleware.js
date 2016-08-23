import { ShelterConstants } from '../actions/shelters_actions';

const SheltersMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case ShelterConstants.REQUEST_SHELTERS:
      console.log('time to fetch shelters!')
      next(action);
    case ShelterConstants.RECEIVE_SHELTERS:
      console.log('recieving shelters...');
      next(action);
    default:
      next(action);
  }
}

export default SheltersMiddleware;
