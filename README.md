## 🚧 Project 1: **To-Do List App** (with Git + SDLC)

---

### 🔍 1. **Planning (SDLC Phase 1)**

**Goal:** Build a web app to add, mark, and delete tasks.  
**Core Features:**
- Add new task
- Mark task as complete
- Delete task
- Save tasks using Local Storage  
    **Stretch Features:**
- Categories
- Sorting
- Filtering tasks

#### → Simulate work environment:
- Create a folder `todo-list-app`
- Create a GitHub repo with the same name
- Create `README.md` with the goal and features

```bash
mkdir todo-list-app
cd todo-list-app
git init
git remote add origin https://github.com/yourname/todo-list-app.git
echo "# To-Do List App" > README.md
touch .gitignore
echo "node_modules" >> .gitignore
git add .
git commit -m "Initialize repo with README and .gitignore"
git push -u origin main
```

---

### 📊 2. **Analysis (SDLC Phase 2)**

Break requirements into **user stories** and **tasks**.
**User Stories:**
- As a user, I want to add a task so I can remember to do it.
- As a user, I want to mark tasks complete so I can track progress.
- As a user, I want to delete tasks I no longer need.
- As a user, I want my tasks saved so they don't disappear on refresh.

**Tasks:**
- Input field and Add button
- Render list of tasks
- Complete task toggle
- Delete task
- Store tasks in Local Storage

---

### 🎨 3. **Design (SDLC Phase 3)**

Use basic wireframing tools (like Figma) or pen & paper to draw the UI.  
Plan layout like this:

```
+----------------------+
|    To-Do List        |
+----------------------+
| [Input Task    ][+ ] |
+----------------------+
| ☐ Buy groceries      |
| ☑ Do homework        |
| ☐ Read a book [X]    |
+----------------------+
```

Create project structure:

```
todo-list-app/
├── index.html
├── style.css
├── script.js
├── README.md
├── .gitignore
```

Push this to GitHub:

```bash
git checkout -b feature/setup-ui
# Create and edit files
git add .
git commit -m "Setup HTML/CSS/JS base layout"
git push -u origin feature/setup-ui
```

Then merge when done:

```bash
git checkout main
git merge feature/setup-ui
git push
```


### 💻 4. **Implementation (SDLC Phase 4)**

Create new branches for each feature:

```bash
git checkout -b feature/add-task
```

#### Add task logic in `script.js`:

```js
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
```

Style it in `style.css`, keeping it clean and responsive.

---

### 🧪 5. **Testing (SDLC Phase 5)**

Manually test:
- Adding empty task (shouldn’t add)
- Marking tasks
- Deleting tasks
- Page reload (local storage test)

Create a file `test-cases.md`:

```md
## Manual Test Cases

- [ ] Add a task
- [ ] Mark a task as complete
- [ ] Delete a task
- [ ] Reload page: tasks persist
```

---

### 🚀 6. **Deployment (SDLC Phase 6)**

Use GitHub Pages:
1. Go to your repo > Settings > Pages
2. Set source to `main` branch + root
3. Wait for link to generate (usually `https://yourname.github.io/todo-list-app/`)

---

### 🔁 7. **Maintenance (SDLC Phase 7)**

- Create issues like `#1 Add category feature`
- Create branch `feature/categories`
- Repeat dev flow
