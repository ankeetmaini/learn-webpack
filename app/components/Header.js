module.exports = function () {
  var heading = document.createElement('h1');
  var text = document.createTextNode('Hello, World!');
  heading.appendChild(text);
  return heading;
};
