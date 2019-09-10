function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(nested, target) {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}

function increaseRankBy(n) {
  let li = document.querySelectorAll('.ranked-list li')

  for (let j = 0, k = li.length; j < k; j++) {
    li[j].innerHTML = parseInt(li[j].innerHTML) + n
  }
}
