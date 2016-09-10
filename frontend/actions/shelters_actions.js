import { CALL_API } from 'redux-api-middleware';

export const ShelterConstants = {
  RECEIVE_SHELTERS: "RECIEVE_SHELTERS",
  REQUEST_SHELTERS: "REQUEST_SHELTERS"
};

export const requestShelters = () => ({
  type: ShelterConstants.REQUEST_SHELTERS
});

export const receiveShelters = shelters => ({
  type: ShelterConstants.RECEIVE_SHELTERS,
  shelters
});

function fetchShelters() {
  return fetch('http://localhost:3000/api/shelters')
};

export function fetchSheltersThunk(){
  return function(dispatch){
    return fetchShelters().then(
      shelters => dispatch(receiveShelters(shelters)),
      error => console.log('error')
    )
  }
}

export function fetchSheltersApi() {
  return {
    [CALL_API]: '/shelters',
    types: [
      'REQUEST',
        dispatch(receiveShelters),
      // {
      //   type: 'SUCCESS',
      //   payload: (action, state, res) => {
      //     console.log('in redux-api-middleware');
      //     return dispatch(receiveShelters(res));
      //   }
    // },
      'FAILURE'
    ]

  }
}
