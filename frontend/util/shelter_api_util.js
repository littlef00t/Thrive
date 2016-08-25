export const fetchShelters = function(){
  $.ajax({
    method: 'GET',
    url: '/api/shelters',
    success: data => console.log(data),
    error: () => console.log('error')
  })
}
