function addElm(per, type, innerText, classList = [], attr = {}) {
  const elm = document.createElement(type);

  classList.length > 0 &&
    classList.forEach((v) => elm.classList.add(v));

  Object.keys(attr).length > 0 &&
    Object.entries(attr).forEach(
      ([key, value]) => (elm[key] = value)
    );

  elm.innerText = innerText;
  per.appendChild(elm);
}
