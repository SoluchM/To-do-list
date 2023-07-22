import React, { useState } from 'react';
import './App.css'

function App() {
  const [task, setTask] = useState('');
  const [items, setItems] = useState([]);

  function addTask(e) {
    e.preventDefault();
    if (!task) {
      alert('Wpisz zadanie');
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: task,
      completed: false
    };

    setItems(oldList => [...oldList, item]);
    setTask('');
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  function toggleComplete(id) {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    });
    setItems(updatedItems);
  }

  return (
    <div className="todolist">
      <p>Lista rzeczy do zrobienia</p>

      <form>
        <input
          type="text"
          className="input"
          placeholder=" Jakie zadanie na dzisiaj?"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <button onClick={addTask} className="submit">
          Dodaj
        </button>
      </form>
      <div className="lista">
        <ul>
          {items.map(item => (
            <li key={item.id} className={item.completed ? 'completed' : ''}>
              <div className="task-content">{item.value}</div>
              <label class="form-control"><input
                type="checkbox"
                name="checkbox"
                checked={item.completed}
                onChange={() => toggleComplete(item.id)}
              />
              </label>
              <button className="delete" onClick={() => deleteItem(item.id)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
