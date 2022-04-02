import './navigation-bar.css';

class NavigationBar {
  navigationItem = [
    {
      path: '/hello-world',
      title: 'Hello World'
    },
    {
      path: '/kiwi',
      title: 'Kiwi'
    }
  ];

  render() {
    const nav = document.createElement('nav');
    nav.classList.add('navigation');
    const ul = document.createElement('ul');
    ul.classList.add('navigation-list');
    this.navigationItem.forEach(({ path, title }) => {
      const li = document.createElement('li');
      li.classList.add('navigation-item');
      const a = document.createElement('a');
      a.href = path;
      a.innerHTML = title;
      li.appendChild(a);
      ul.appendChild(li);
    });
    nav.appendChild(ul);
    document.body.appendChild(nav);
  }
}

export default NavigationBar;
