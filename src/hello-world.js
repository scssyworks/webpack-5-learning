// first page
import { upperFirst } from 'lodash';
import Heading from './components/heading/heading';
import HelloWorldButton from './components/hello-world-button/hello-world-button';

new Heading().render(upperFirst('hello world'));
new HelloWorldButton().render();
