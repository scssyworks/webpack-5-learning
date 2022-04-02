import './heading.css';

class Heading {
  render(heading) {
    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerHTML = `Welcome to ${heading} page!`;

    document.body.appendChild(h1);
  }
}

export default Heading;
