export const fetchShelters = (success) => {
  $.ajax({
    method: 'GET',
    url: '/api/shelters',
    success,
    error: (e) => console.log(e)
  })
}
