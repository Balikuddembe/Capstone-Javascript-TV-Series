const comments = (commentList) => {
  let counter;
  commentList.forEach((ele, index) => {
    counter = index + 1;
  });
  return counter;
};
export default comments;