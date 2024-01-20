import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
console.log (galleryContainer);

function createGallery(galleryItems) {
    let htmlString = "";
    galleryItems.forEach(({ preview, original, description }) => {
        htmlString += `
        <li class="gallery__item">
          <a class="gallery__link" ${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`;
        
    });
    return htmlString;
}

galleryContainer.insertAdjacentHTML("afterbegin", createGallery(galleryItems));

galleryContainer.addEventListener("click", openModal);

function openModal(e) {
    e.preventDefault();
if (e.target.nodeName !== "IMG") {
    return;
}
const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${e.target.dataset.source}" alt="${e.target.alt}">
    </div>
`);

instance.show();

}