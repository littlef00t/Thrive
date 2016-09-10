import { connect } from 'react-redux';
import ShelterIndex from './shelter_index';
import { requestShelters } from '../actions/shelters_actions';

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
