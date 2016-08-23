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
})
