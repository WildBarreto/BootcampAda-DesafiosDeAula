function add() {
  // Gera um ID aleatório
  let randomId = generateRandomId();
  // Obtém o valor do input com o nome 'task' do formulário com o nome 'form_main'
  let input_title = document.form_main.title.value;
  let input_description = document.form_main.description.value;

  // Cria um objeto representando a tarefa
  let task = {
    id: randomId,
    title: input_title,
    description: input_description
  };

  // Salva a tarefa no localStorage
  saveTask(task);

  // Chama a função para renderizar a lista de tarefas
  renderTasks();

  // Limpa os valores dos inputs para preparar para a próxima entrada
  document.form_main.title.value = "";
  document.form_main.description.value = "";
}

function generateRandomId() {
  // Gera um número aleatório e o converte para uma string
  return Math.random().toString(36).substring(2, 10);
}

function saveTask(task) {
  // Obtém as tarefas existentes do localStorage
  let existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  // Adiciona a nova tarefa à lista de tarefas
  existingTasks.push(task);

  // Salva a lista atualizada no localStorage
  localStorage.setItem('tasks', JSON.stringify(existingTasks));
  console.log(existingTasks)
}

function removeTask(id) {
  // Obtém as tarefas existentes do localStorage
  let existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Encontra o índice da tarefa com base no ID
  const findIndexToRemove = existingTasks.findIndex(task => task.id === id);

  if (findIndexToRemove !== -1) {
    // Remove a tarefa do array
    existingTasks.splice(findIndexToRemove, 1);

    // Atualiza o localStorage com a lista modificada de tarefas
    localStorage.setItem('tasks', JSON.stringify(existingTasks));
    console.log("Tarefa removida");
  } else {
    console.log("Erro ao remover a tarefa");
  }
}

function createCloseButton(li, taskId) {
  let span = document.createElement("SPAN");
  let cancel = document.createTextNode("\u00D7");

  span.className = "close";
  span.appendChild(cancel);
  li.appendChild(span);
  // Adiciona um evento de clique ao botão de fechar
  span.onclick = () => {
    // Remove a tarefa do localStorage e re-renderiza a lista
    removeTask(taskId);
    renderTasks();
  };
}

function createEditButton(li, taskId) {
  let span = document.createElement("SPAN");
  let editIcon = document.createTextNode("\u270E");

  span.className = "edit";
  span.appendChild(editIcon);
  li.appendChild(span);

  // Adiciona um evento de clique ao botão de edição
  span.onclick = () => {
    // Chama a função para editar a tarefa
    editTask(taskId);
  };
}

function createCheckedButton(li) {
  let span = document.createElement("SPAN");
  let chekedIcon = document.createTextNode("\u2713");

  span.className = "checkmark";
  span.appendChild(chekedIcon);
  li.appendChild(span);

  // Adiciona um evento de clique ao botão de edição
  span.onclick = () => {
    // Acessa o elemento li pai
    const parentLi = span.parentElement;

    // Alterna a classe 'checked' no elemento li
    parentLi.classList.toggle('checked');
  };

}

function editTask(taskId) {
  // Obtém as tarefas existentes do localStorage
  let existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Encontra a tarefa com base no ID
  const taskToEdit = existingTasks.find(task => task.id === taskId);

  if (taskToEdit) {
    // Limpa a lista de tarefas no documento
    document.querySelector('ul').innerHTML = '';

    // Cria um formulário para edição
    let editForm = document.createElement('form');

    // Adiciona input para o título
    let titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.value = taskToEdit.title;
    editForm.appendChild(titleInput);

    // Adiciona input para a descrição
    let descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.value = taskToEdit.description;
    editForm.appendChild(descriptionInput);

    // Adiciona um botão "Salvar" que chama uma função de salvamento
    let saveButton = document.createElement('button');
    saveButton.innerText = 'Salvar';
    saveButton.onclick = () => saveEditedTask(taskId, titleInput.value, descriptionInput.value);
    editForm.appendChild(saveButton);

    // Adiciona o formulário à lista
    document.querySelector('ul').appendChild(editForm);
  } else {
    console.log("Erro ao editar a tarefa");
  }
}

function saveEditedTask(taskId, newTitle, newDescription) {
  // Obtém as tarefas existentes do localStorage
  let existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Encontra a tarefa com base no ID
  const taskToEditIndex = existingTasks.findIndex(task => task.id === taskId);

  if (taskToEditIndex !== -1) {
    // Atualiza os valores da tarefa com os novos valores dos inputs editáveis
    existingTasks[taskToEditIndex].title = newTitle;
    existingTasks[taskToEditIndex].description = newDescription;

    // Salva a lista atualizada no localStorage
    localStorage.setItem('tasks', JSON.stringify(existingTasks));

    // Re-renderiza a lista com a tarefa editada
    renderTasks();
  } else {
    console.log("Erro ao salvar a tarefa editada");
  }
}

function renderTasks() {
  // Limpa a lista de tarefas no documento
  document.querySelector('ul').innerHTML = '';

  // Obtém as tarefas do localStorage
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  // Renderiza cada tarefa na lista
  tasks.forEach(task => {
    let li = document.createElement('LI');
    let taskText = document.createTextNode(`ID: ${task.id}, Title: ${task.title}, Description: ${task.description}`);
    li.appendChild(taskText);
    document.querySelector('ul').appendChild(li);

    // Adiciona o botão de fechar à tarefa
    createCloseButton(li, task.id);
    createEditButton(li, task.id)
    createCheckedButton(li, task.id)
  });
}
