import "./styles.css";

const img = document.querySelector('img');
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=rNi0yvET0y0zGm4PYKzRKcUWbL5V4Fw5&s=cats')
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    });
 