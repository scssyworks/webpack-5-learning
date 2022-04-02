// Second page
import { upperFirst } from 'lodash';
import Heading from './components/heading/heading';
import KiwiImage from './components/kiwi-image/kiwi-image';
import './index.css';

new Heading().render(upperFirst('kiwi'));
new KiwiImage().render();

import('HelloWorldApp/HelloWorldButton').then((HelloWorldButtonModule) => {
  const HelloWorldButton = HelloWorldButtonModule.default;
  new HelloWorldButton().render();
});
