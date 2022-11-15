const loadRoot = document.getElementById('load-root');
const sLoad = document.getElementById('s-load');

sLoad.addEventListener('click', (e) => {
  // start loading
  const load = startLoading(loadRoot, (elm) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'load-cont';
    btn.innerText = 'Stop Loading';
    btn.classList.add('btn');

    elm.appendChild(btn);
  });

  // placeholder api call
  customPromise(load.elements['load-cont'])
    .then(() => {
      load.stopLoading();
    })
    .catch((e) => {
      load.stopLoading(e);
    });
});
