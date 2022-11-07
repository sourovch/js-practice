const photosBtn = document.getElementById('show-photos');
const root = document.getElementById('root');
const emtCont = document.getElementById('empity-cont');

const lCont = document.getElementById('l-cont');

photosBtn.addEventListener('click', (e) => {
  startLoad(lCont);
  fetch('https://jsonplaceholder.typicode.com/photos')
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
    div.classList.add('photos', 'box');

    const titleWrapper = document.createElement('div');
    titleWrapper.classList.add('title-wrapper');

    const thumb = document.createElement('div');
    thumb.classList.add('thumb');
    addElm(thumb, 'img', '', [], { src: v.thumbnailUrl });

    titleWrapper.append(thumb);
    addElm(titleWrapper, 'h2', v.title, ['title']);

    div.appendChild(titleWrapper);
    addElm(div, 'img', '', [], { src: v.url });
    addElm(div, 'p', v.id, ['mark']);

    root.appendChild(div);
  });
}
