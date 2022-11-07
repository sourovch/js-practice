function addElm(per, type, innerText, classList = [], attr = {}) {
  const elm = document.createElement(type);

  classList.length > 0 &&
    classList.forEach((v) => elm.classList.add(v));

  Object.keys(attr).length > 0 &&
    Object.entries(attr).forEach(
      ([key, value]) => (elm[key] = value)
    );

  elm.innerText = innerText;
  per.appendChild(elm);
}

function startLoad(elm) {
  const div = document.createElement('div');
  div.classList.add('load', 'box');

  const p = document.createElement('p');
  p.innerText = 'Loading';

  div.appendChild(p);

  elm.appendChild(div);

  setTimeout(() => {
    elm.innerHtml = '';
  }, 2000);
}

function endLoad() {
  const loads = document.querySelectorAll('.load');
  for (let load of loads) {
    load.remove();
  }
}
