// functions
function startLoading(root, cb) {
  const rootCont = document.createElement('div');

  rootCont.innerHTML = `
  <div class="loading">
    <div class="dot dot-1"></div>
    <div class="dot dot-2"></div>
    <div class="dot dot-3"></div>
  </div>
  <p>Loading</p>
  `;

  if (cb && typeof cb == 'function') cb(rootCont);
  rootCont.classList.add('load-cont');
  rootCont.id = 'load-cont2132';

  root.children['load-cont2132'] &&
    document.getElementById('load-cont2132').remove();

  root.appendChild(rootCont);
  return {
    elements: rootCont.children,
    stopLoading: (err) => {
      err ? (rootCont.innerText = err) : rootCont.remove();
    },
  };
}

function customPromise(triggerRes, triggerRej) {
  return new Promise((res, rej) => {
    triggerRes?.addEventListener('click', () => {
      res();
    });
    triggerRej?.addEventListener('click', () => {
      rej('somthing went wrong');
    });
  });
}

function makeWetElm(root, data) {
  const id = '1132Dj';
  if (data === null) {
    root.children[id] && document.getElementById(id).remove();
    return;
  }

  const div = document.createElement('div');
  div.id = id;
  div.classList.add('cont', 'w-cont');
  div.style.backgroundImage = `url('http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png')`;

  addElm(div, 'p', data.name, ['city']);
  addElm(div, 'p', data.weather[0].main, ['wet']);
  addElm(div, 'p', `${(data.main.temp - 273.1).toFixed(1)}&#8451;`, [
    'temp',
  ]);
  addElm(
    div,
    'p',
    `Windflow: ${data.wind.speed}km/h,${data.wind.deg}&deg;`,
    ['wind']
  );

  root.children[id] && document.getElementById(id).remove();
  root.appendChild(div);
}

function addElm(per, type, innerText, classList = [], attr = {}) {
  const elm = document.createElement(type);

  classList.length > 0 &&
    classList.forEach((v) => elm.classList.add(v));

  Object.keys(attr).length > 0 &&
    Object.entries(attr).forEach(
      ([key, value]) => (elm[key] = value)
    );

  elm.innerHTML = innerText;
  per.appendChild(elm);
}
