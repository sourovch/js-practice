const sel = document.getElementById('sel');
const root = document.getElementById('root');

sel.addEventListener('change', (e) => {
  const load = startLoading(root);
  // this will clear the previus
  makeWetElm(root, null);
  const city = e.target.value;

  if (city === 'none') return load.stopLoading();

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&limit=1&appid=572d0092f38eede795da3c32b3d18e8b`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.cod && data.cod > 400) {
        load.stopLoading(data.message);
        return;
      }

      makeWetElm(root, data);
      load.stopLoading();
    })
    .catch((err) => load.stopLoading(err));
});
