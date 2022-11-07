const todosBtn = document.getElementById('show-todos');
const root = document.getElementById('root');
const emtCont = document.getElementById('empity-cont');

const lCont = document.getElementById('l-cont');

todosBtn.addEventListener('click', (e) => {
  startLoad(lCont);
  fetch('https://jsonplaceholder.typicode.com/todos')
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
    div.classList.add('todos', 'box');

    addElm(div, 'p', v.id, ['mark']);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = v.completed;

    const p = document.createElement('p');
    p.classList.add('title');
    p.innerText = v.title;
    checkComplition(v.completed, p);

    checkbox.addEventListener('change', (e) => {
      checkComplition(e.target.checked, p);
    });

    div.append(checkbox);
    div.append(p);

    root.appendChild(div);
  });
}

function checkComplition(ischecked, elm) {
  ischecked
    ? elm.classList.add('done')
    : elm.classList.remove('done');
}
