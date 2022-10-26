var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.thecatapi.com/v1/images/search", requestOptions)
  .then(response => response.json())
  .then(result => {
      console.log(result)
      document.getElementsByClassName('hopefully')[0].innerHTML = "<img src = " + result[0].url + ">"
  })
  .catch(error => console.log('error', error));
