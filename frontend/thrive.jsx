import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { requestShelters, receiveShelters } from './actions/shelters_actions';

window.requestShelters = requestShelters;
window.receiveShelters = receiveShelters;


document.addEventListener('DOMContentLoaded', () => {
  window.Store = configureStore();
  ReactDOM.render(<div>Breathe</div>, document.getElementById('content'));
});
