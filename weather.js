
const img = document.querySelector('img')
fetch('https://api.giphy.com/v1/gifs/random?api_key=q9tkcuxMHVaN0Tw4OS102p3WpPzBohwN&tag=&rating=G', {mode: 'cors'})
  .then(function(response) {
    return response.json()
  })
  .then(function(response) {
    img.src = response.data.images.original.url
  })
  .catch(e => {
    console.log(e)
  })
