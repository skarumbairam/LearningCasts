import { useState } from "react";

const TodoComponent = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [inputText, setInputText] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    addTodoItem();
  };

  const inputChageHandler = (e) => {
    const tempTextInput = e.target.value;
    setInputText(tempTextInput);
  };

  const addTodoItem = () => {
    const tempTodos = [{ value: inputText, id: todoItems.length }];
    setTodoItems([...todoItems, ...tempTodos]);
    setInputText("");
  };

  const todoDeleteHandler = (id) => {
    console.log("ida", id);
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };

  const todoEditHandler = (id, value) => {
    const updateItem = todoItems.map((item, idx) => {
      if (item.id === id) {
        item.value = value;
      }
      return item;
    });

    setTodoItems(updateItem);
  };

  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          formSubmitHandler(e);
        }}
      >
        <div className="input-group mb-3">
          <input
            id="inputBox"
            type="text"
            placeholder="Type Your Todo Item"
            class="form-control"
            aria-label="Action Item List"
            value={inputText}
            onChange={(e) => {
              inputChageHandler(e);
            }}
          />
          <button className="btn border">Submit</button>
        </div>
      </form>

      <div className="todolist-container">
        <ul>
          {todoItems.map((todo, index) => {
            return (
              <TodoItem
                todo={todo}
                id={todo.id}
                deleteHandler={todoDeleteHandler}
                editHandler={todoEditHandler}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const TodoItem = ({ todo, deleteHandler, editHandler, id }) => {
  const [editOpition, setEditOpetion] = useState(false);
  const [editinput, setEditInput] = useState("");

  const todoDeleteHandler = () => {
    deleteHandler(id);
  };

  const todoEditHandler = (id) => {
    setEditOpetion(true);
  };

  const editinputHandler = (e) => {
    setEditInput(e.target.value);
  };

  const editSubmitHandler = () => {
    setEditOpetion(false);
    editHandler(id, editinput);
  };

  return (
    <li
      key={todo.id}
      className="d-flex flex-row justify-content-between align-items-center p-3 border-dark border-bottom"
    >
      <p>
        {todo.id} - {todo.value}
      </p>
      <button className="btn border" onClick={() => todoEditHandler()}>
        Edit
      </button>
      <button className="btn border" onClick={() => todoDeleteHandler()}>
        Delete
      </button>
      {editOpition && (
        <div className="d-flex flex-row justify-content-between align-items-center">
          <input
            type="text"
            id="editInput"
            value={editinput}
            onChange={(e) => editinputHandler(e)}
          />
          <button className="btn border" onClick={() => editSubmitHandler()}>
            Submit
          </button>
        </div>
      )}
    </li>
  );
};
export default TodoComponent;
