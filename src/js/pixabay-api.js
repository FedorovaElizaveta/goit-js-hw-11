import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function searchImages(searchTerm) {
  const params = new URLSearchParams({
    key: '43479786-9f1318bdfd325e0623d2d394a',
    q: searchTerm,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `https://pixabay.com/api/?${params}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      } else {
        return data.hits;
      }
    })
    .catch(error => console.log(error));
}
