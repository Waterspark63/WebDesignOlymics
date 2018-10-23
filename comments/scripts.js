const form = document.getElementById('form');
const ul = document.getElementById('ul');
const button = document.getElementById('button');
const button2 = document.getElementById('button2');
const input = document.getElementById('item');
const comment = document.getElementById('comment');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
let commentssArray = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

button2.addEventListener('click', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  itemsArray.push(comment.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  localStorage.setItem('comments', JSON.stringify(commentsArray));
  liMaker(input.value);
  liMaker(comment.value);
  input.value = "";
  comment.value = "";
});

data.forEach(item => {
  liMaker(item);
});

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});
function clearAll() {
  localStorage.clear();
  startReload();
}

function startReload() {
  setTimeout(reloadPage(), 1000);
}

function reloadPage() {
  location.reload();
}
