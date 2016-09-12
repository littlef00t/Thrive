import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import SearchContainer from './components/SearchContainer';
import configureStore from './store/store';
import { requestShelters, receiveShelters } from './actions/shelters_actions';
import { fetchShelters } from './util/shelter_api_util';
import { assoc } from 'ramda';


document.addEventListener('DOMContentLoaded', () => {
  window.Store = configureStore();
  window.assoc = assoc;
  // window.fetchShelters = fetchShelters;
  // window.requestShelters = requestShelters;
  // window.receiveShelters = receiveShelters;
  let store = configureStore();
  const Root = () => (
    <Provider store={store}>
      <SearchContainer />
    </Provider>
  );

  ReactDOM.render(<Root/>, document.getElementById('content'));
});
