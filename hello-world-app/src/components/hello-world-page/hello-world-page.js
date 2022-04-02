// first page
import { upperFirst } from 'lodash';
import Heading from '../heading/heading';
import HelloWorldButton from '../hello-world-button/hello-world-button';
import './index.css';

class HelloWorldPage {
  render() {
    new Heading().render(upperFirst('hello world'));
    new HelloWorldButton().render();
  }
}

export default HelloWorldPage;
