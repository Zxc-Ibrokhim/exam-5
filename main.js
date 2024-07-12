let inputs = document.querySelectorAll('input');
let btn = document.querySelector('button');

let users = [
  {
    userName: "Ibrokhim",
    password: "1234",
  },
  {
    userName: "Polat",
    password: "1234",
  },
  {
    userName: "Kamron",
    password: "1234",
  }
];

btn.addEventListener('click', () => {
  let found = false;
  

  for (let i = 0; i < users.length; i++) {
    if (users[i].userName === inputs[0].value && users[i].password === inputs[1].value) {
      alert('Добро пожаловать'); 
      found = true;
      break; 
    }
  }
  
  if (!found) {
    alert('Пароль либо айди у вас введено неправильно'); 
    alert('Попробуйте ввести заново')
  }
});

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        addTodoItem(todoText);
        todoInput.value = '';
    }
});

function addTodoItem(todoText) {
    const li = document.createElement('li');
    li.textContent = ': ' + todoText; 
    li.classList.add('task-item');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    li.appendChild(deleteButton);

    todoList.appendChild(li);

    deleteButton.addEventListener('click', function() {
        li.remove();
    });
}
