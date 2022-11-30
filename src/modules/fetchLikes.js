const fetchLikes = async () => {
  const getApiLikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eHLzmWWPvFRWRTA0brmG/likes';
  const response = await fetch(getApiLikes);
  const allLikes = await response.json();
  allLikes.forEach((element) => {
    if (document.querySelector(`[data-id="${element.item_id}"]`)) {
      document.querySelector(`[data-id="${element.item_id}"]`).nextElementSibling.innerHTML = element.likes;
    }
  });
};

export default fetchLikes;