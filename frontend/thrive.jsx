import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ShelterIndexContainer from './components/shelter_index_container';
import configureStore from './store/store';
import { requestShelters, receiveShelters } from './actions/shelters_actions';
import { fetchShelters } from './util/shelter_api_util';


document.addEventListener('DOMContentLoaded', () => {
  // window.Store = configureStore();
  // window.fetchShelters = fetchShelters;
  // window.requestShelters = requestShelters;
  // window.receiveShelters = receiveShelters;
  const Root = (
    <Provider store={configureStore}>
      <ShelterIndexContainer/>
    </Provider>
  );

  ReactDOM.render(<div>{Root}</div>, document.getElementById('content'));
});
