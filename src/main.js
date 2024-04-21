import { searchImages } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const userValue = event.target.elements.search.value;

  searchImages(userValue)
    .then(images => {
      if (images) {
        const markup = createMarkup(images);

        gallery.innerHTML = markup;

        const lightbox = new SimpleLightbox('.gallery a', {
          captionSelector: 'self',
          captionType: 'data',
          captionsData: 'caption',
          captionDelay: 250,
        });

        lightbox.refresh();
      } else {
        gallery.innerHTML = '';
      }
    })
    .catch(error => {
      console.error(error);
    });

  event.target.reset();
}
