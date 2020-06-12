const images = document.querySelectorAll('.images');
const blurBG = document.querySelector('.blur');

function toggleExpand(e) {
  this.classList.toggle('expand');
}

function toggleBlur(e) {
  blurBG.classList.toggle('blurry');
  console.log(e);
}

images.forEach((image) => image.addEventListener('click', toggleExpand));
images.forEach((image) => image.addEventListener('transitionstart', toggleBlur));
