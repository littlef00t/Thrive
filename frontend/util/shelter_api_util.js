export const fetchShelters = (filters, success) => {
  $.ajax({
    method: 'GET',
    url: '/api/shelters',
    data: filters,
    success,
    error: (e) => console.log(e)
  })
}
