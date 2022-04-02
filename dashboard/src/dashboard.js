import NavigationBar from './components/navigation-bar/navigation-bar';

new NavigationBar().render();

(async () => {
  const url = window.location.pathname;
  const HelloWorldPageModule = await import('HelloWorldApp/HelloWorldPage');
  const KiwiPageModule = await import('KiwiApp/KiwiPage');

  const HelloWorldPage = HelloWorldPageModule.default;
  const KiwiPage = KiwiPageModule.default;

  if (url === '/hello-world') {
    new HelloWorldPage().render();
  }
  if (url === '/kiwi') {
    new KiwiPage().render();
  }
})();
