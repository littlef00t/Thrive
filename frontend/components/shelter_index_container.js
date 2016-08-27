import { connect } from 'react-redux';

const mapStatetoProps = state => ({
  shelters: state.shelters;
})

const mapDispatchtoProps = dispatch => ({
  requestShelters: () => dispatch(requestShelters())
})

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(ShelterIndex);
