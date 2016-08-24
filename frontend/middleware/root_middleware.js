import { applyMiddleware } from 'redux';
import SheltersMiddleware from './shelters_middleware';

const RootMiddleware = applyMiddleware(
  SheltersMiddleware
);

export default RootMiddleware;
