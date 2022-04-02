// Second page
import { upperFirst } from 'lodash';
import Heading from '../heading/heading';
import KiwiImage from '../kiwi-image/kiwi-image';
import './index.css';

class KiwiPage {
  render() {
    new Heading().render(upperFirst('kiwi'));
    new KiwiImage().render();
  }
}

export default KiwiPage;
