import './style.css';
import getData from './modules/fetch.js';
import addEventLike from './modules/displayLikes.js';
import fetchLikes from './modules/fetchLikes.js';
import addEventToCommentBtn from './modules/popUp.js';
import mainScript from './modules/main.js';

mainScript();
addEventToCommentBtn();
addEventLike();

getData().then((value) => {
  value.forEach((item, index) => {
    if (index < 6) {
      const container = document.createElement('div');
      container.classList.add('item');
      container.innerHTML = `
      <div class = "image-list">
      <img src="${item.image.original}" alt = "${item.name}">
      </div>
      <div class="images-info">
      <h4>${item.name}</h4>
      <div class="like">
        <p><i data-id="${item.id}" class="fa fa-heart-o" aria-hidden="true"></i><span class="qty">0</span><span>Likes</span></p>
      </div>
      </div>
      <button data-idBtn="${item.id}" class="commentBtn" type="submit">Comments</button>
     <div data-descr="${item.summary}"></div>
      `;

      document.querySelector('.items-diplay').appendChild(container);
    }
  });
  addEventToCommentBtn();
  addEventLike();
  fetchLikes();
});