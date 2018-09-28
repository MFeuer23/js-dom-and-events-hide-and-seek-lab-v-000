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
  let list = document.querySelectorAll("ul.ranked-list")
  for (let i = 0; i < list.length; i++) {
    let innerList = list[i].querySelectorAll("li")
      for (let j = 0; i < innerList.lengthl; j++) {
        innerList[j].innerHTML = parseInt(innerList[j]) + n;
      }
  }
}