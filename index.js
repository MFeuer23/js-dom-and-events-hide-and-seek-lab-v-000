function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("div#nested div.target")
}

function deepestChild() {
  let list = document.querySelector("div#grand-node").querySelectorAll("div")
  for (let i = 0; i < list.length; i++) {
    list[i].querySelector('div')
  }
}