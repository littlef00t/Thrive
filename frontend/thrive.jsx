import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { requestShelters, receiveShelters } from './actions/shelters_actions';
import { fetchShelters } from './util/shelter_api_util';



document.addEventListener('DOMContentLoaded', () => {
  window.Store = configureStore();
  window.fetchShelters = fetchShelters;
  window.requestShelters = requestShelters;
  window.receiveShelters = receiveShelters;
  ReactDOM.render(<div>Breathe</div>, document.getElementById('content'));
});
