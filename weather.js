fetch('https:api.openweathermap.org/data/2.5/forecast?id=4569067&APPID=6efa3875a6e7444c141415582068a400',
{mode: 'cors'})
  .then(function(response) {
    console.log(response)
  })
