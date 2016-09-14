class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleCLick = handleClick;
    this.markers = [];
    this.createMarker = this._createMarkerFromShelter.bind(this);
    this.removeMarker = this._removeMarker.bind(this);
  }

  updateMarkers(shelters){
    this.shelters = shelters;
    this.shelterIndexes = Object.keys(this.shelters);
    this._sheltersToAdd().forEach(this.createMarker);
    this._markersToRemove().forEach(this.removeMarker);
  }

  _sheltersToAdd(){
    const currentShelterIds = this.markers.map( marker => marker.shelterId )
    const newShelters = this.shelters;
    const newShelterIndexes = this.shelterIndexes;

    let sheltersToAdd = [];
    newShelterIndexes.forEach(shelterIndex => {
      if (!currentShelterIds.includes(newShelters[shelterIndex].id)){
        sheltersToAdd.push(newShelters[shelterIndex]);
      }
    })
    return sheltersToAdd;
    // //initializing reduce with empty array
    // return newShelterIndexes.reduce( (previousVal, shelterIndex) => {
    //   console.log(newShelters[shelterIndex].id);
    //   console.log('previous value', previousVal);
    //   if (!currentShelterIds.includes(newShelters[shelterIndex].id)) {
    //     //adding shelter object to previous arr
    //     return ( previousVal.concat( [newShelters[shelterIndex]] ));
    //   }
    // }, [] );
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
    marker.addListener('click', () => this.handleClick(shelter));
  }

  _markersToRemove(){
    const shelterIds = this.shelterIndexes.map( shelterId => this.shelters[shelterId].id )
    // console.log('shelter ids to be in this map', shelterIds);
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
  }
}

export default MarkerManager;
