import { connect } from 'react-redux';
import ShelterIndex from './shelter_index';
import { fetchSheltersThunk, fetchSheltersApi } from '../actions/shelters_actions';

const mapStatetoProps = state => ({
  shelters: state.shelters
})

const mapDispatchtoProps = dispatch => ({
  requestShelters: () => dispatch(fetchSheltersApi())
})

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(ShelterIndex);
