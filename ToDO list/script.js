var todos = [
    {todoText:'Item 1', completed:false},
    {todoText:'Item 2', completed:false},
    {todoText:'Item 3', completed:false}
    ];
    
    displayTodos();
    
    function add() {
      var initialTodoText = addInput.value;
      todos.push({todoText:initialTodoText, completed:false});
      addInput.value = '';
      displayTodos(); 
    }
    
    
    function edit(event, text) {
      var place = event.target.id;
      text = prompt();
      if (text !== null && text !=="") { 
      todos[place].todoText = text;
      displayTodos();
    }}
    
    function remove(event){
      var position = event.target.id;
      todos.splice(position , 1);
      displayTodos();
    }
    
    
    
    
    
    function toggle(event) {
      var position = event.target.id;
      if (todos[position].completed===true){
        todos[position].completed = false;
      }
      else {
        todos[position].completed = true;
      }
      displayTodos();
    
    }
    
    function displayTodos() {
      var todoListUL = document.getElementById('todoList-ul');
      todoListUL.innerHTML = '';
    
      for ( var i=0; i < todos.length; i++) {
        var todoLI = document.createElement('li');
        if( todos[i].completed === true){
          todoLI.innerText = '[X] '+  todos[i].todoText;
        }
        else {
          todoLI.innerText = '[ ] '+  todos[i].todoText;
        }
     
      var removeButton = document.createElement('button');
      removeButton.innerText = ' Remove';
      removeButton.addEventListener('click', remove);
      removeButton.id = i;
    //toggle button
      var toggleButton = document.createElement('button');
      toggleButton.innerText = ' Toggle';
      toggleButton.addEventListener('click', toggle);
      toggleButton.id = i;
    
      // edit button
      var editButton = document.createElement('button');
      editButton.innerText = ' Edit';
      editButton.addEventListener('click', edit);
      editButton.id = i;
    
      
     todoLI.appendChild(editButton);
     todoLI.appendChild(toggleButton);
     todoLI.appendChild(removeButton);
     todoListUL.appendChild(todoLI);
    }
    }

    
    
    function toggleAll() {
      var completedTodos = 0;
      for (var i = 0; i < todos.length; i++){
        if ( todos[i].completed === true){
         completedTodos++;
        }
      }
      if ( completedTodos === todos.length) {
        for (var i = 0; i<todos.length; i++) {
        todos[i].completed = false;
        }
      }
      else {
        for (var i = 0; i<todos.length; i++) {
        todos[i].completed = true;
        }
      }


    displayTodos();
    }
    
    var toggleAllButton = document.getElementById('toggleAllButton');
    toggleAllButton.addEventListener('click',toggleAll);
    var addButton = document.getElementById('addButton');
    var addInput = document.getElementById('addInput');
    addButton.addEventListener('click', add);
    