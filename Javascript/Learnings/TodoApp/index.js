function ApproachOne() {
  const inputBox = document.getElementById("inputBox");
  const form = document.getElementById("form");
  const submitBtn = document.getElementById("submit-button");
  const ulContainer = document.getElementById("action-item-container");
  const editItemContainer = document.createElement("div");
  editItemContainer.classList.add("editItemContainer");
  const editBox = document.createElement("input");
  const editSubmit = document.createElement("a");
  editSubmit.innerText = "Submit";
  editSubmit.classList.add("btn", "border");

  if (localStorage.getItem("todolist-js")) {
    const getList = JSON.parse(localStorage.getItem("todolist-js"));

    for (let item of getList) {
      createListAndAppend(item);
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    createListAndAppend();
  });

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createListAndAppend();
  });

  function createListAndAppend(item) {
    const textValue = inputBox.value || item.value;
    const liElement = document.createElement("li");
    const liTextElement = document.createElement("p");
    liTextElement.innerText = textValue;
    liTextElement.classList.add("col-md-4");

    const generateId = ulContainer.children.length;
    liElement.setAttribute("data-id", generateId);
    liElement.classList.add("list-item", "row");

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("btn", "border", "col-md-4");

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "border", "col-md-4");

    liElement.appendChild(liTextElement);
    liElement.appendChild(editBtn);
    liElement.appendChild(deleteBtn);
    ulContainer.appendChild(liElement);

    deleteBtn.addEventListener("click", function (e) {
      const tempParent = this.parentElement;
      tempParent.remove();
      updateLocalStorage();
    });

    editBtn.addEventListener("click", function (e) {
      const tempParent = this.parentElement;
      editBox.value =
        this.parentElement &&
        this.parentElement.querySelector("p") &&
        this.parentElement.querySelector("p").innerText;
      editBox.classList.add("iputEditBox", "form-control");
      editItemContainer.appendChild(editBox);
      editItemContainer.appendChild(editSubmit);
      tempParent.appendChild(editItemContainer);
    });

    editSubmit.addEventListener("click", function (e) {
      const editItemContainer = this.parentElement;
      const inputEditBox = editItemContainer.querySelector("input");
      const getLiElement = editItemContainer.parentElement;
      if (getLiElement.querySelector("p")) {
        const listItem = getLiElement.querySelector("p");
        listItem.innerText = inputEditBox.value;
        editItemContainer.remove();
      } else {
        return;
      }

      updateLocalStorage();
    });

    updateLocalStorage();
    inputBox.value = "";
  }

  function updateLocalStorage() {
    const todoNotes = document.querySelectorAll("li");
    const notes = [];

    todoNotes.forEach((todoItem, index) => {
      notes.push({
        value: todoItem.querySelector("p").innerText,
        completed: todoItem.classList.contains("completed"),
        id: index,
      });
    });
    localStorage.setItem("todolist-js", JSON.stringify(notes));
  }
}

ApproachOne();

function ApproachTwo() {
  const inputBox = document.getElementById("inputBox");
  const formElement = document.getElementById("form");
  const todoListContainer = document.getElementById("action-item-container");

  if (localStorage.getItem("todolist-js")) {
    const getList = JSON.parse(localStorage.getItem("todolist-js"));
    for (let item of getList) {
      addToDoItems(item);
    }
  }
  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    addToDoItems();
  });

  function addToDoItems(item) {
    const todoList = document.createElement("li");

    todoList.innerText = inputBox.value || item.value;

    if (item.completed) {
      todoList.classList.add("completed");
    }

    todoListContainer.appendChild(todoList);
    todoList.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      todoList.remove();
      updateLocalStorage();
    });

    todoList.addEventListener("click", () => {
      todoList.classList.toggle("completed");
      updateLocalStorage();
    });
    updateLocalStorage();
    inputBox.value = "";
  }

  function updateLocalStorage() {
    const todoNotes = document.querySelectorAll("li");
    const notes = [];

    todoNotes.forEach((todoItem, index) => {
      notes.push({
        value: todoItem.innerText,
        completed: todoItem.classList.contains("completed"),
        id: index,
      });
    });
    console.log(notes);
    localStorage.setItem("todolist-js", JSON.stringify(notes));
  }
}
