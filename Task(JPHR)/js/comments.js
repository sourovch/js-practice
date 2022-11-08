const commentsBtn = document.getElementById('show-comments');
const root = document.getElementById('root');
const emtCont = document.getElementById('empity-cont');

const lCont = document.getElementById('l-cont');

commentsBtn.addEventListener('click', (e) => {
  startLoad(lCont);
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then((res) => res.json())
    .then((data) => {
      endLoad();
      root.innerHTML = '';
      createPosts(data, 10);
    });
});

function createPosts(data, limit) {
  data = data.splice(0, limit);

  emtCont.classList.add('none');

  data.forEach((v) => {
    const div = document.createElement('div');
    div.classList.add('comments', 'box');

    addElm(div, 'p', v.name, ['name']);
    addElm(div, 'p', v.email, ['email']);
    addElm(div, 'p', v.body, ['body']);
    addElm(div, 'p', v.id, ['mark']);

    root.appendChild(div);
  });
}
