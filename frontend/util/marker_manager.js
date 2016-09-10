class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  updateMarkers(shelters){
    this.shelters = shelters;
    this._sheltersToAdd().forEach(this._createMarkerFromShelter.bind(this));
  }

  _sheltersToAdd(){
    const currentShelterIds = this.markers.map( marker => marker.shelterId )
    const newShelters = this.shelters;
    const newShelterIds = Object.keys(newShelters);

    return newShelterIds.reduce( (collection, shelterId) => {
      if (!currentShelterIds.includes(shelterId)) {
        console.log('adding', shelterId)
        return ( collection.concat( [newShelters[shelterId]] ));
      }
    }, [] );
  }

  _createMarkerFromShelter(shelter){
    console.log(shelter.lat, shelter.long);
    const position = new google.maps.LatLng(shelter.long, shelter.lat);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      shelterId: shelter.id
    });
    console.log('marker created');
  }
}

export default MarkerManager;
