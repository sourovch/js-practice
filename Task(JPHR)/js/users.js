const usersBtn = document.getElementById('show-users');
const root = document.getElementById('root');
const emtCont = document.getElementById('empity-cont');

usersBtn.addEventListener('click', (e) => {
  fetch('https://jsonplaceholder.typicode.com/users')
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
    div.classList.add('users', 'box');

    addElm(div, 'p', v.name, ['name']);
    addElm(div, 'p', `username: ${v.username}`);
    addElm(div, 'p', `email: ${v.email}`);
    addElm(
      div,
      'p',
      `address: ${v.address.suite},${v.address.street},${v.address.city}`
    );
    addElm(div, 'p', `zipcode: ${v.address.zipcode}`);
    addElm(div, 'p', `phone: ${v.phone}`);
    addElm(div, 'p', 'website: ', ['w-l']);
    addElm(div, 'a', v.website, [], { href: v.website });
    addElm(div, 'p', v.id, ['mark']);

    root.appendChild(div);
  });
}
