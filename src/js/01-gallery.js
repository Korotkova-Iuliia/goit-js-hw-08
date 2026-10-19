import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// // Add imports above this line
import { galleryItems } from './gallery-items';
// // Change code below this line
console.log(galleryItems);

const imageContainer = document.querySelector('.gallery');

const imagesMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="item"><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
  })
  .join('');
imageContainer.insertAdjacentHTML('beforeend', imagesMarkup);
console.log(imageContainer);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 1250,
  enableKeyboard: true,
  animationSlide: true,
  animationSpeed: 250,
  loop: true,
  doubleTapZoom: 2,
});

// ----- Lazy load new IntersectionObserver(callback, options);-----//
// const targets = document.querySelectorAll('.item');
// console.log(targets);

// let options = {
//   root: null,
//   rootMargin: '50px',
//   threshold: 0.7, // see element 70%
// };

// function callback(entries, observer) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       console.log(entry.target);
//       observer.unobserve(entry.target);
//     }
//   });
// }

// const observer = new IntersectionObserver(callback, options);

// targets.forEach(target => {
//   observer.observe(target);
// });
