import React from 'react';
import configureStore from '../store/store';
import { requestShelters } from '../actions/shelters_actions';

class ShelterIndex extends React.Component{
  componentDidMount(){
    this.props.requestShelters();
    console.log(this.props.shelters);
  }

  render(){
    let shelters = this.props.shelters;
    return(
      <div>
        <h3>Shelters</h3>
        <ul>
          {shelters.map((shelter) => {
            return <li key={shelter.id}>{shelter.name}</li>
            })
          }
        </ul>
      </div>
    );

  }
};

export default ShelterIndex;
