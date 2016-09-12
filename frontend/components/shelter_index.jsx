import React from 'react';
import configureStore from '../store/store';
import { requestShelters } from '../actions/shelters_actions';

const ShelterIndex = ({ shelters }) => {
    const shelterKeys = Object.keys(shelters);
    return(
      <div>
        <h3>Shelters</h3>
        <ul>
          {shelterKeys.map((key) => {
            return <li key={shelters[key].id}>{shelters[key].name}</li>
            })
          }
        </ul>
      </div>
    );
};

export default ShelterIndex;
