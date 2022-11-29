import postLike from './postLike.js';

const addEventLike = () => {
  const getAllLikes = document.querySelectorAll('.like i');
  getAllLikes.forEach((item) => {
    // eslint-disable-next-line func-names
    item.addEventListener('click', function () {
      const stop = this.dataset.id;
      const getLike = document.querySelector(`[data-id="${this.dataset.id}"]`).nextElementSibling.innerHTML;
      document.querySelector(`[data-id="${this.dataset.id}"]`).nextElementSibling.innerHTML = Number(getLike) + 1;
      this.style.pointerEvents = 'none';
      setTimeout(() => {
        document.querySelector(`[data-id="${stop}"]`).style.pointerEvents = 'initial';
      }, 400);
      postLike(this.dataset.id);
    });
  });
};

export default addEventLike;