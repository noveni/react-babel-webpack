import helloWorld from './hello-world';

function component() {
  var appBody = document.createElement('div')
  appBody.className = 'app'

  var title = document.createElement('h1');
  title.innerHTML = 'Hi, lil bud'

  appBody.appendChild(title)

  var btn = document.createElement('button');
  btn.innerHTML = 'Click me and watch the console!';
  btn.onclick = helloWorld

  appBody.appendChild(btn)

  return appBody
}
document.body.appendChild(component())

if (module.hot) {
  module.hot.accept('./hello-world.js', function() {
    console.log('Accepting the updated hellWorld module!');
    helloWorld();
  })
}