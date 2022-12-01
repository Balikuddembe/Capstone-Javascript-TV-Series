const numberOfMovies = (arrayOfMovies) => {
  let number;
  arrayOfMovies.forEach((element, index) => {
    number = index + 1;
  });
  return number;
};
export default numberOfMovies;