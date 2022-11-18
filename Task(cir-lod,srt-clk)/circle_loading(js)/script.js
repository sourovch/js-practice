let inter = null; // to save previous intervale

document
  .getElementById('mod-form')
  .addEventListener('submit', (e) => {
    e.preventDefault();

    inter && clearInterval(inter);

    const speedInp = e.target['speed'];
    const speedVal = Number(speedInp.value) || 10;
    const animationDur = 11 - cap(speedVal, 10);

    const childCountInp = e.target['c-count'];
    const childCountVal = Number(childCountInp.value) || 10;
    const childCount = cap(childCountVal, 20);

    const cirRadiusInp = e.target['radius'];
    const cirRadiusVal = Number(cirRadiusInp.value) || 50;
    const cirRadius = cap(cirRadiusVal, 100);

    e.target['s-btn'].innerText = 'update';

    inter = startLoading(
      animationDur,
      childCount,
      cirRadius
    ).intervale;
  });

// functions
function startLoading(animationDur, childCount, cirRadius) {
  const rotation = 360 / childCount;
  let counter = 1;

  const inter = setInterval(() => {
    if (counter > childCount) {
      counter = 1;
    }

    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.style.transformOrigin = `0 calc(100% + ${cirRadius}px)`;
    dot.style.transform = `rotate(${counter * rotation}deg)`;
    dot.style.animationDuration = `${animationDur}s`;

    dot.addEventListener('animationend', (e) => e.target.remove());

    document.querySelector('.load-cont').append(dot);

    counter++;
  }, (animationDur / childCount) * 1000);

  return {
    intervale: inter,
  };
}

function cap(value, limit) {
  if (value > limit) return limit;

  if (value < 0) return 0;

  return value;
}
