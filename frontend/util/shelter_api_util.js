export const fetchShelters = (success) => {
  $.ajax({
    method: 'GET',
    url: '/api/shelters',
    success: success,
    error: () => console.log('error')
  })
}
