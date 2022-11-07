const albumsBtn = document.getElementById('show-albums');
const root = document.getElementById('root');
const emtCont = document.getElementById('empity-cont');

const lCont = document.getElementById('l-cont');

albumsBtn.addEventListener('click', (e) => {
  startLoad(lCont);
  fetch('https://jsonplaceholder.typicode.com/albums')
    .then((res) => res.json())
    .then((data) => {
      endLoad();
      createPosts(data, 10);
    });
});

function createPosts(data, limit) {
  data = data.splice(0, limit);

  emtCont.classList.add('none');

  data.forEach((v) => {
    const div = document.createElement('div');
    div.classList.add('albums', 'box');

    addElm(div, 'h1', v.title);
    addElm(div, 'p', v.id, ['mark']);

    root.appendChild(div);
  });
}
