const postLike = async (itemId) => {
  const likeObj = {
    item_id: itemId,
  };
  const getApiLikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eHLzmWWPvFRWRTA0brmG/likes';
  await fetch(getApiLikes, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(likeObj),
  });
};

export default postLike;