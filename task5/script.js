async function fetchTodoList() {
    const userId = document.getElementById('userIdInput').value;
  
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
      const todoList = await response.json();
  
      if (response.ok) {
        displayTodoList(todoList);
      } else {
        document.getElementById('todoList').innerHTML = 'Пользователь с указанным id не найден';
      }
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
      document.getElementById('todoList').innerHTML = 'Ошибка при выполнении запроса';
    }
  }
  
  function displayTodoList(todoList) {
    const todoListContainer = document.getElementById('todoList');
    todoListContainer.innerHTML = '';
  
    if (todoList.length === 0) {
      todoListContainer.innerHTML = 'Пользователь не имеет задач.';
      return;
    }
  
    const ul = document.createElement('ul');
  
    todoList.forEach(todo => {
      const li = document.createElement('li');
      li.textContent = todo.title;
      if (todo.completed) {
        li.classList.add('completed');
      }
      ul.appendChild(li);
    });
  
    todoListContainer.appendChild(ul);
  }
  