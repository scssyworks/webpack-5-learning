import './hello-world-button.css';

class HelloWorldButton {
  helloWorldButton = 'hello-world-button';
  render() {
    const button = document.createElement('button');
    button.innerHTML = 'Hello World';
    button.classList.add(this.helloWorldButton);
    button.onclick = function () {
      const p = document.createElement('p');
      p.innerHTML = 'Hello World';
      p.classList.add('hello-world-text');
      document.body.appendChild(p);
    };
    document.body.appendChild(button);
  }
}

export default HelloWorldButton;
