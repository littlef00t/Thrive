import React from 'react';
import MarkerManager from '../util/marker_manager';

class ShelterMap extends React.Component{
  componentDidMount(){

    // find the `<map>` node on the DOM
    const mapDOMNode = this.refs.map;

    // set the map to show SF
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.shelters);
    this.map.addListener('idle', () => {
      const { south, west, north, east } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: {lat: north, lng: east},
        southWest: {lat: south, lng: west}
      };
      this.props.updateBounds(bounds);
    })
  }

  componentDidUpdate(){
    this.MarkerManager.updateMarkers(this.props.shelters);
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
