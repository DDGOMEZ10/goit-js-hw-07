

import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");

function createGallery(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`
    )
    .join(" ");
}

galleryContainer.insertAdjacentHTML("afterbegin", createGallery(galleryItems));

galleryContainer.addEventListener("click", openModal);

function openModal(e) {
  e.preventDefault();
  const image = e.target.querySelector('.gallery__image');
  const src = image.dataset.source;
  const alt = image.alt;
  lightbox.content.innerHTML = `<img src="${src}" alt="${alt}">`;
  lightbox.open();
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionData: "alt",
  captionDelay: "250ms",
});