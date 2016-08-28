import React from 'react';
import configureStore from '../store/store';
import { requestShelters } from '../actions/shelters_actions';

class ShelterIndex extends React.Component{
  componentDidMount(){
    requestShelters();
  }

  render(){
    <h3>Shelters</h3>

  }
};

export default ShelterIndex;
