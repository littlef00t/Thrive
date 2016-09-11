import React from 'react';
import ShelterMap from './shelter_map';
import ShelterIndex from './shelter_index';

const Search = ({shelters, requestShelters, updateBounds}) => (
  <div>
    <ShelterMap shelters={shelters} updateBounds={updateBounds}/>
    <ShelterIndex shelters={shelters} requestShelters={requestShelters}/>
  </div>
);

export default Search;
