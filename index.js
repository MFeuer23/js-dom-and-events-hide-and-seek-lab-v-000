function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("div#nested div.target")
}

function deepestChind() {
  let list = document.querySelector("div#grand-node").querySelectorAll("div")
  for (let i = 0; i < list.length; i++) {
    return list[i].querySelectorAll('div')
  }
}