const startBtn = document.getElementById('s-btn');
const root = document.getElementById('root');

startBtn.addEventListener('click', (e) => {
  e.target.disabled = true;
  clock();
});

function clock() {
  let sec = 0,
    min = 0,
    hour = 0;

  setResetClock();

  function setResetClock() {
    const id = '12kd';

    document.getElementById(id)?.remove();

    const h1 = document.createElement('h1');
    h1.id = id;
    h1.innerText = `${pad(hour)}: ${pad(min)}: ${pad(sec)}`;

    root.append(h1);

    if (min < 5 && sec >= 5) {
      sec = 0;
      min++;
    } else if (min >= 5 && sec >= 5) {
      sec = 0;
      min = 0;
      hour++;
    } else {
      sec++;
    }

    setTimeout(() => {
      setResetClock();
    }, 1000);
  }

  function pad(num) {
    return num < 9 ? '0' + num : num;
  }
}
