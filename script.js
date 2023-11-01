
const header = document.querySelector('header');
const h1 = document.querySelector('h1');
const image = document.querySelector('img');


function changeText() {
  const newText = prompt('Enter new text:');
  if (newText) {
    h1.textContent = newText;
  }
}


function changeBackground() {
  const newColor = prompt('Enter new background color (e.g., #ff0000 for red):');
  if (newColor) {
    header.style.backgroundColor = newColor;
  }
}


function changeImage() {
  const newImage = prompt('Enter new image URL:');
  if (newImage) {
    image.src = newImage;
  }
}


document.getElementById('changeTextBtn').addEventListener('click', changeText);
document.getElementById('changeBackgroundBtn').addEventListener('click', changeBackground);
document.getElementById('changeImageBtn').addEventListener('click', changeImage);