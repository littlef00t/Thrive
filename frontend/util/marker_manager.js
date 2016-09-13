class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
    this.createMarker = this._createMarkerFromShelter.bind(this);
    this.removeMarker = this._removeMarker.bind(this);
  }

  updateMarkers(shelters){
    console.log(shelters);
    this.shelters = shelters;
    this.shelterIndexes = Object.keys(this.shelters);
    this._markersToRemove().forEach(this.removeMarker);
    this._sheltersToAdd().forEach(this.createMarker);
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
        console.log('previous value', previousVal);
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
    console.log('marker made, shelter:id', marker.shelterId);
  }

  _markersToRemove(){
    const shelterIds = this.shelterIndexes.map( shelterId => this.shelters[shelterId].id )
    console.log('shelter ids to be in this map', shelterIds);
    // console.log('markers on previous map', this.markers);
    // console.log(this.markers.filter( marker => {
    //   return !shelterIds.hasOwnProperty(marker.shelterId);
    // }));
    return this.markers.filter( marker => {
      return !shelterIds.includes(marker.shelterId);
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
