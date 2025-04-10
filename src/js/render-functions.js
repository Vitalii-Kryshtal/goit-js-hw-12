import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function renderPhoto(div, array) {
  const markup = array
    .map(i => {
      return `<li class="gallery-item">
    <a class="image-link" href="${i.largeImageURL}"><img class="image" src="${i.webformatURL}" alt="${i.tags}" title=""/></a>
    <ul class="image-descr-list">
<li class="descr-item">Likes<span class="descr-span">${i.likes}</span></li>
<li class="descr-item">Views<span class="descr-span">${i.views}</span></li>
<li class="descr-item">Comments<span class="descr-span">${i.comments}</span></li>
<li class="descr-item">Downloads<span class="descr-span">${i.downloads}</span></li>
    </ul>
    </li>`;
    })
    .join('');
  div.insertAdjacentHTML('beforeend', markup);
  refreshSlb();
}

const simplelightbox = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function refreshSlb() {
  simplelightbox.refresh();
}

function clearGallery(div) {
  div.innerHTML = '';
}

function showLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'flex';
}

function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
}

function showLoadMoreButton() {
  const loadMoreBtn = document.querySelector('.load-more-btn');
  loadMoreBtn.classList.remove('visually-hidden');
}

function hideLoadMoreButton() {
  const loadMoreBtn = document.querySelector('.load-more-btn');
  loadMoreBtn.classList.add('visually-hidden');
}

export default renderPhoto;
export {
  clearGallery,
  showLoader,
  hideLoader,
  simplelightbox,
  refreshSlb,
  showLoadMoreButton,
  hideLoadMoreButton,
};
