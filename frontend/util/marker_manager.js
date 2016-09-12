class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  updateMarkers(shelters){
    this.shelters = shelters;
    this.shelterIndexes = Object.keys(this.shelters);
    this._markersToRemove().forEach(this._removeMarker.bind(this));
    this._sheltersToAdd().forEach(this._createMarkerFromShelter.bind(this));
    console.log(this.markers);
  }

  _sheltersToAdd(){
    const currentShelterIds = this.markers.map( marker => marker.shelterId )
    const newShelters = this.shelters;
    const newShelterIndexes = Object.keys(newShelters);

    //initializing reduce with empty array
    return newShelterIndexes.reduce( (previousVal, shelterIndex) => {
      console.log(newShelters[shelterIndex].id);
      if (!currentShelterIds.includes(newShelters[shelterIndex].id)) {
        //adding shelter object to previous arr
        console.log(previousVal);
        return ( previousVal.concat( [newShelters[shelterIndex]] ));
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
    console.log('marker made', marker.shelterId);
  }

  _markersToRemove(){
    // console.log('shelter indexes to be in this map', this.shelterIndexes);
    const shelterIds = this.shelterIndexes.map( shelterId => this.shelters[shelterId].id )
    // console.log('shelter ids to be in this map', shelterIds);
    // console.log('markers on previous map', this.markers);
    // console.log(this.markers.filter( marker => {
    //   return !shelterIds.hasOwnProperty(marker.shelterId);
    // }));
    return this.markers.filter( marker => {
      return !shelterIds.hasOwnProperty(marker.shelterId);
    })
  }

  _removeMarker(marker){
    const i = this.markers.indexOf(marker);
    this.markers[i].setMap(null);
    //deleting marker from this.markers
    this.markers.splice(i, 1);
    console.log('marker removed', marker.shelterId);

  }
}

export default MarkerManager;
