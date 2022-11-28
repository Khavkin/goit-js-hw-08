// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const addStyleSheet = fileName => {
  // add stylesheet to page

  const head = document.head;
  const link = document.createElement('link');

  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = fileName;

  head.appendChild(link);
};

const createGallery = () => {
  const result = [...galleryItems].reduce(
    (markup, { preview, original, description }) => {
      return (
        markup +
        `<a class="gallery__item" href="${original}"> 
            <img class="gallery__image" src="${preview}" alt="${description}" /> 
        </a>`
      );
    },
    ''
  );

  gallery.insertAdjacentHTML('afterbegin', result);
};

createGallery();

const galleryBox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

console.log(galleryItems);
