import { connect } from 'react-redux';
import ShelterIndex from './shelter_index';

const mapStatetoProps = state => ({
  shelters: state.shelters
})

const mapDispatchtoProps = dispatch => ({
  requestShelters: () => dispatch(requestShelters())
})

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(ShelterIndex);
