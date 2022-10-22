import {React,useEffect,useState} from "react";
import styled from 'styled-components'
import {BiAddToQueue} from 'react-icons/bi'
import {MdOutlineDelete} from 'react-icons/md'
import {FiEdit2} from 'react-icons/fi'
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
    <Com>
    <div id="todo-list">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo}/>
        <button type="submit"><BiAddToQueue/></button>
      </form>
      
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-text">
            <input
              type="checkbox"
              id="completed"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
           
            {todo.id === todoEditing ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : ( 
              <div>{todo.text}</div>
            )}
          </div>
          <div className="todo-actions">
            {todo.id === todoEditing ? (
              <button className="me-1" onClick={() => submitEdits(todo.id)}>Submit Edits</button>
            ) : (
              <button className="me-1" onClick={() => setTodoEditing(todo.id)}><FiEdit2/></button>
            )}

            <button onClick={() => deleteTodo(todo.id)}><MdOutlineDelete/></button>
          </div>
        </div>
      ))}
    </div>
    </Com>
  );
};

export default Todo;

const Com = styled.div`
    width: -webkit-fill-available;
    h1 {
  text-align: center;
}
#todo-list {
  width: 500px;
  margin: 5px auto;
}
form, .todo {
  border: 1px solid grey;
  padding: 10px 20px;
  margin-bottom: 10px;
}
form {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
form input {
  padding: 4px 8px;
  flex-grow: 1;
  margin-right: 16px;
}
.todo {
  display: flex;
  flex-direction: row;
    justify-content: space-between;
}

button {
  font-size: 16px;
  background-color: rgb(35, 105, 217);
  color: #fff;
  border-radius: 8px;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
}
button:hover {
  background-color: rgb(62, 28, 173);
}
button:active {
  background-color: #3c779f;
}
button:focus {
  outline: 0;
}
input[type='text'] { font-size: 20px; font-family: monospace; }
.todo input[type="checkbox"] {
  transform: scale(1.8) translateY(1px);
  margin: 0 16px 0 0;
  cursor: pointer;
}
.todo-text input {
  padding: 4px;
}
.todo-text {
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}
.todo-completed {
  display: flex;
  margin: 10px 0;
}
.todo-actions {
  display: flex;
  justify-content: flex-end;
}

`