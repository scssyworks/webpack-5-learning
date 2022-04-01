import Kiwi from './kiwi.jpg';
import altText from './altText.txt';

function addImage() {
  const img = document.createElement('img');
  img.alt = altText;
  img.width = 300;
  img.src = Kiwi;

  document.body.appendChild(img);
}

export default addImage;
