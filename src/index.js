import "./styles.css";

const img = document.querySelector('img');
const btn = document.querySelector('button');

    const button = document.getElementById('go');
  

  fetch('https://api.giphy.com/v1/gifs/translate?api_key=rNi0yvET0y0zGm4PYKzRKcUWbL5V4Fw5&s=bird')
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    })
    .catch(e => {
      console.log(e)
    });


    function loadCatGif() {
   
  img.src = '';  
  img.alt = 'Loading funny cat translation...';
  btn.disabled = true; 
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=rNi0yvET0y0zGm4PYKzRKcUWbL5V4Fw5&s=cats`, {
    mode: 'cors'  // explicitly request CORS (good practice)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Giphy error: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      if (!data?.data?.images?.original?.url) {
        throw new Error('No GIF URL in response');
      }
      img.src = data.data.images.original.url;
      img.alt = 'Translated cats GIF';
    })
    .catch(error => {
      console.error('Cat GIF fetch failed:', error);

      // User-friendly feedback
      img.alt = 'Failed to load cat GIF 😿 Try again!';
      // Optional: nice fallback
      img.src = 'https://placekitten.com/480/360?grayscale'; // or your own sad cat image

      // You could also show a message in the DOM:
      // const msg = document.createElement('p');
      // msg.textContent = 'Oops! Couldn’t fetch a cat. Check console or try later.';
      // document.body.appendChild(msg);
    })
    .finally(() => {
      btn.disabled = false; // re-enable button
    });
}
 
 
btn.addEventListener('click', loadCatGif
);

function doSearch() {
    const input = document.getElementById('query');
      const q = input.value.trim();
      if (!q) return;

      
      const url = `https://api.giphy.com/v1/gifs/translate?api_key=rNi0yvET0y0zGm4PYKzRKcUWbL5V4Fw5&s=${q}`;
       
    console.log(url);
      fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Giphy error: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      if (!data?.data?.images?.original?.url) {
        throw new Error('No GIF URL in response');
      }
      img.src = data.data.images.original.url;
      img.alt = 'Translated cats GIF';
    })
    .catch(error => {
      console.error('Cat GIF fetch failed:', error);

      // User-friendly feedback
      img.alt = 'Failed to load cat GIF 😿 Try again!';
      // Optional: nice fallback
      img.src = 'https://placekitten.com/480/360?grayscale'; // or your own sad cat image

      // You could also show a message in the DOM:
      // const msg = document.createElement('p');
      // msg.textContent = 'Oops! Couldn’t fetch a cat. Check console or try later.';
      // document.body.appendChild(msg);
    })
    .finally(() => {
      btn.disabled = false; // re-enable button
    });

      
    }

    button.addEventListener('click', doSearch);

    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        doSearch();
      }
    });