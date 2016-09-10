import React from 'react';
import MarkerManager from '../util/marker_manager';

class ShelterMap extends React.Component{
  componentDidMount(){
    // find the `<map>` node on the DOM
    const mapDOMNode = this.refs.map;

    // set the map to show SF
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers();
  }

  render(){

    return (
      <div>
        <div id='map-container' ref='map'></div>
      </div>
    )
  }
}

export default ShelterMap;
