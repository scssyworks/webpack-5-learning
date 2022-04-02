import Kiwi from './kiwi.jpg';
import altText from './altText.txt';
import './kiwi-image.css';

class KiwiImage {
  render() {
    const img = document.createElement('img');
    img.alt = altText;
    img.src = Kiwi;
    img.classList.add('kiwi-image');

    document.body.appendChild(img);
  }
}

export default KiwiImage;
