const elements = document.querySelectorAll('.child');

let counter = 1;

elements.forEach((elm) => {
  elm.addEventListener('click', function handleCount(e) {
    e.target.innerText = counter;
    e.target.dataset.count = counter;

    // removing this current event listener from element after click
    e.target.removeEventListener('click', handleCount);

    // looping elements again to change color
    elements.forEach((elm) => {
      const countData = parseInt(elm.dataset.count);

      if (countData === counter) {
        elm.style.backgroundColor = '#F45B69';
      } else if (countData === counter - 1) {
        elm.style.backgroundColor = '#4062BB';
      } else if (countData === counter - 2) {
        elm.style.backgroundColor = '#887880';
      }
    });

    // incrementing counter
    counter++;
  });
});
