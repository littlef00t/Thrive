class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  updateMarkers(shelters){
    this.shelters = shelters;
    this._sheltersToAdd().forEach(this._createMarkerFromShelter.bind(this));
    this._markersToRemove().forEach(this._removeMarker.bind(this));
  }

  _sheltersToAdd(){
    const currentShelterIds = this.markers.map( marker => marker.shelterId )
    const newShelters = this.shelters;
    const newShelterIds = Object.keys(newShelters);

    //initializing reduce with empty array
    return newShelterIds.reduce( (previousVal, shelterId) => {
      if (!currentShelterIds.includes(shelterId)) {
        //adding shelter object to previous arr
        return ( previousVal.concat( [newShelters[shelterId]] ));
      }
    }, [] );
  }

  _createMarkerFromShelter(shelter){
    const position = new google.maps.LatLng(shelter.lat, shelter.long);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      title: shelter.name,
      shelterId: shelter.id
    });
    this.markers.push(marker);
  }

  _markersToRemove(){
    return this.markers.filter( marker => {
      return !this.shelters.hasOwnProperty(marker.shelterId);
    })
  }

  _removeMarker(marker){
    const i = this.markers.indexOf(marker);
    marker.setMap(null);
    //deleting marker from this.markers
    this.markers.splice(i, 1);

  }
}

export default MarkerManager;
