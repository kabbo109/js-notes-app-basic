const list = document.getElementById('list');

function load(){
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  list.innerHTML = '';
  notes.forEach((n,i)=>{
    const li = document.createElement('li');
    li.innerHTML = `${n} <button onclick="remove(${i})">x</button>`;
    list.appendChild(li);
  });
}

function add(){
  const input = document.getElementById('note');
  if(!input.value) return;

  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.push(input.value);
  localStorage.setItem('notes', JSON.stringify(notes));
  input.value = '';
  load();
}

function remove(i){
  const notes = JSON.parse(localStorage.getItem('notes'));
  notes.splice(i,1);
  localStorage.setItem('notes', JSON.stringify(notes));
  load();
}

load();
