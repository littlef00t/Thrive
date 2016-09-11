import { connect } from 'react-redux';
import Search from './Search';
import { requestShelters } from '../actions/shelters_actions';
import { updateBounds } from '../actions/filter_actions';

const mapStatetoProps = state => ({
  shelters: state.shelters
})

const mapDispatchtoProps = dispatch => ({
  requestShelters: () => dispatch(requestShelters()),
  updateBounds: (bounds) => dispatch(updateBounds())
})

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Search);
