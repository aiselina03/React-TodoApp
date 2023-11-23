import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./App.css";


function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const FormSubmit = (e) => {
    e.preventDefault()  
    if (inputValue === "") {
      alert("You must write something!") 
    } else {
      setItems([...items, inputValue])
      setInputValue(""); 
    }
  }

  const Delete = (index) => {
    const newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }

  return (
       <div className="todolist">
      <div className="todo">
        <h1>Todo List</h1>

        <form onSubmit={FormSubmit}>
          <input type="text" value={inputValue} placeholder="add item..." onChange={(e) => setInputValue(e.target.value)}/>
          <button type="submit">Add</button>
        </form>

        <ul className="list">
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <FontAwesomeIcon icon={faTrash} onClick={() => Delete(index)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoList







