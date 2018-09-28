function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("div#nested div.target");
}

function deepestChild() {
  let list = document.querySelector("div#grand-node").querySelectorAll("div");
  for (let i = 0; i < list.length; i++) {
    if (!list[i].querySelector("div")) {
      return list[i]
    }
  }
}

function increaseRankBy(n) {
  let list = document.querySelectorAll("ul.ranked-list"
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i]) + n;
  }
}