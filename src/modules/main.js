import srcimport from '../assets/log.png';

const mainScript = () => {
  const gethumburger = document.querySelector('.humburger-wrapper');
  const getclose = document.querySelector('.closeclass');
  gethumburger.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('menu');
  });
  getclose.addEventListener('click', () => {
    document.querySelector('body').classList.remove('menu');
  });

  const getimg = document.querySelector('.logo-img img');
  getimg.src = srcimport;
};

export default mainScript;