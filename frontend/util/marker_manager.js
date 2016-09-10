class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  updateMarkers(shelters){
    this.shelters = shelters;
    console.log(this._sheltersToAdd());
    this._sheltersToAdd().forEach(this._createMarkerFromShelter.bind(this));
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
      shelterId: shelter.id
    });
  }
}

export default MarkerManager;
