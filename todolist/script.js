function saveTasks() {
  const todos = Array.from(document.getElementById("todoList").children).map(li => li.textContent.slice(0, -2));
  const dones = Array.from(document.getElementById("doneList").children).map(li => li.textContent.slice(0, -2));
  localStorage.setItem("todoList", JSON.stringify(todos));
  localStorage.setItem("doneList", JSON.stringify(dones));
}

function loadTasks() {
  const todos = JSON.parse(localStorage.getItem("todoList")) || [];
  const dones = JSON.parse(localStorage.getItem("doneList")) || [];

  todos.forEach(task => createTaskItem(task, false));
  dones.forEach(task => createTaskItem(task, true));
}

function createTaskItem(taskText, isDone) {
  const li = document.createElement("li");
  li.textContent = taskText;

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✔️";
  doneBtn.onclick = () => markAsDone(li);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  const div = document.createElement("div");
  div.className = "buttons";
  div.appendChild(doneBtn);
  div.appendChild(deleteBtn);
  li.appendChild(div);
  

  // li.appendChild(doneBtn);
  // li.appendChild(deleteBtn);

  if (isDone) {
    li.classList.add("done");
    document.getElementById("doneList").appendChild(li);
  } else {
    document.getElementById("todoList").appendChild(li);
  }
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  createTaskItem(taskText, false);
  input.value = "";
  saveTasks();
}

function markAsDone(taskItem) {
  taskItem.classList.add("done");
  document.getElementById("doneList").appendChild(taskItem);
  saveTasks();
}

window.onload = loadTasks;
