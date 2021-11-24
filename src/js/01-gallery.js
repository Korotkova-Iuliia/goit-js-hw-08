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
// lightbox.refresh();
console.log(imageContainer);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  enableKeyboard: true,
  animationSlide: true,
  animationSpeed: 250,
});
let target = document.querySelector('.item');
console.log(target);

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};
let observer = new IntersectionObserver(callback, options);
function callback(entries, observer) {
  entries.forEach(entry => {
    //   entry.rootBounds;         // a DOMRectReadOnly for the intersection observer's root.
    // entry.boundingClientRect; // a DOMRectReadOnly for the intersection observer's target.
    // entry.intersectionRect;   // a DOMRectReadOnly for the visible portion of the intersection observer's target.
    // entry.intersectionRatio;  // the number for the ratio of the intersectionRect to the boundingClientRect.
    entry.target; // the Element whose intersection with the intersection root changed.
    console.log(entry.target);
    entry.isIntersecting; // intersecting: true or false
  });
  observer.observe(target);
}

// \\\\\\\\\\\\
// function onEntry(entries, observer) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       page += 1;
//       getAxiosTag(surchtags, page).then(photos => {
//         renderPhotos(photos.hits);
//       });
//     }
//   });
// }
// const observer = new IntersectionObserver(onEntry, {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0.5,
// });
