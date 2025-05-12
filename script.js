const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" ${task.done ? "checked" : ""} data-index="${i}" />
      <span class="${task.done ? "done" : ""}">${task.text}</span>
      <button data-index="${i}" class="delete-btn">X</button>
    `;
    taskList.appendChild(li);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

addBtn.addEventListener("click", () => {
  if (taskInput.value.trim()) {
    tasks.push({ text: taskInput.value.trim(), done: false });
    taskInput.value = "";
    renderTasks();
  }
});

taskList.addEventListener("click", (e) => {
  const i = e.target.dataset.index;
  if (e.target.type === "checkbox") {
    tasks[i].done = !tasks[i].done;
  } else if (e.target.classList.contains("delete-btn")) {
    tasks.splice(i, 1);
  }
  renderTasks();
});

renderTasks();