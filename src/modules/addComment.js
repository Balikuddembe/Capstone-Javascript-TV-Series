import displayComments from './displayComments.js';

const addComment1 = async (comObj, newid) => {
  const getApiComment = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eHLzmWWPvFRWRTA0brmG/comments';
  await fetch(getApiComment, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comObj),
  });

  displayComments(newid);
};

const addComment = () => {
  const getAddBtn = document.querySelector('.form');
  getAddBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    const newid = document.querySelector('.popup').getAttribute('data-popid');
    const getName = document.querySelector('.form input').value;
    const getMess = document.querySelector('.form textarea').value;
    const comObj = {
      item_id: newid,
      username: getName,
      comment: getMess,
    };
    addComment1(comObj, newid);
    e.stopImmediatePropagation();
  });
};

export default addComment;