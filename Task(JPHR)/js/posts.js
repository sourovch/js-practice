const potsBtn = document.getElementById('show-posts');
const root = document.getElementById('root');
const emtCont = document.getElementById('empity-cont');

potsBtn.addEventListener('click', (e) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      createPosts(data, 10);
    });
});

function createPosts(data, limit) {
  data = data.splice(0, limit);

  emtCont.classList.add('none');

  data.forEach((v) => {
    const div = document.createElement('div');
    div.classList.add('post', 'box');

    addElm(div, 'h2', v.title);
    addElm(div, 'p', v.body);
    addElm(div, 'p', v.id, ['mark']);

    root.appendChild(div);
  });
}
