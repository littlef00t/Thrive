export const fetchShelters = (success) => {
  $.ajax({
    method: 'GET',
    url: '/api/shelters',
    success,
    error: () => console.log('error')
  })
}
