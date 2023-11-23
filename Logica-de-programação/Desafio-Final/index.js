function addTask() {
  // Obtém o valor do input com o nome 'task' do formulário com o nome 'form_main'
  try {
    let inputTitle = document.formTask.title.value;
    let inputDescription = document.formTask.description.value;

    if (inputTitle === '' || inputDescription === '') {
      throw new Error("O título e a descrição não podem estar vazios.")
    }

    if (!isNaN(inputTitle) || inputTitle.length < 4) {
      throw new Error("O título deve ter no mínimo 4 caracteres e não pode conter apenas números.");
    }

    if (inputDescription.length < 20) {
      throw new Error("A descrição deve ter no mínimo 20 caracteres.")
    }

    //validação do totulo
    if (existingTasks.some(task => task.title === inputTitle)) {
      throw new Error("Já existe uma tarefa com esse titulo.")
    }

    let randomId
    do {
      randomId = Math.floor(Math.random() * 1000).toString();
    } while (existingTasks.some(task => task.id === randomId));

    // Cria um objeto representando a tarefa
    let task = {
      id: randomId,
      title: inputTitle,
      description: inputDescription
    };

    saveTask(task);
    renderTasks();

    document.formTask.title.value = "";
    document.formTask.description.value = "";
  } catch (error) {
    alert(error.message)
  }
}
// Obtém as tarefas existentes do localStorage
let existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTask(task) {
  // Adiciona a nova tarefa à lista de tarefas
  existingTasks.push(task);
  // Salva a lista atualizada no localStorage
  localStorage.setItem('tasks', JSON.stringify(existingTasks));
}

function removeTask(id) {
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

function editTask(taskId) {
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
  // Encontra a tarefa com base no ID
  const taskToEditIndex = existingTasks.findIndex(task => task.id === taskId);

  try {
    if (taskToEditIndex !== -1) {
      // Validação do título
      if (newTitle === "") {
        throw new Error("O título não pode estar vazio");
      }

      // Validação de título duplicado
      if (existingTasks.some(task => task.title === newTitle && task.id !== taskId)) {
        throw new Error("Já existe uma tarefa com o mesmo título");
      }

      // Validação da descrição
      if (newDescription.length < 20) {
        throw new Error("A descrição deve ter no mínimo 20 caracteres");
      }
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
  } catch (error) {
    alert(error.message);
    // Retorno antecipado para impedir a execução adicional do código

  }

}


function findTaskById(id) {

  const foundTask = existingTasks.find(task => task.id === id);

  // Verifica se encontrou a tarefa
  let ul = document.querySelector('ul');
  if (foundTask && ul) {
    ul.innerHTML = '';
    // Renderiza a tarefa encontrada na lista
    let li = document.createElement('LI');
    let taskText = document.createTextNode(`ID: ${foundTask.id}, Title: ${foundTask.title}, Description: ${foundTask.description}`);
    li.appendChild(taskText);
    ul.appendChild(li);
    // Adiciona os botões à tarefa
    createCloseButton(li, foundTask.id);
    createEditButton(li, foundTask.id);
    createCheckedButton(li);
  } else {
    alert("Tarefa não encontrada ou elemento 'ul' não encontrado no DOM");
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



function renderTasks() {
  // Limpa a lista de tarefas no documento
  document.querySelector('ul').innerHTML = '';
  // Renderiza cada tarefa na lista
  existingTasks.forEach(task => {
    let li = document.createElement('LI');
    let taskText = document.createTextNode(`ID: ${task.id},  Title: ${task.title}, Description: ${task.description}`);
    li.appendChild(taskText);
    document.querySelector('ul').appendChild(li);

    // Adiciona o botão de fechar à tarefa
    createCloseButton(li, task.id);
    createEditButton(li, task.id)
    createCheckedButton(li, task.id)
  });
}


