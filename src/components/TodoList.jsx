// src/components/TodoList.jsx
import React from 'react';
import { TrashCan } from '@carbon/icons-react';
import './TodoList.css'; // Import the CSS file for specific styles

function TodoList({ todos, onRemove, onToggle }) {
  return (
    <ul className="TodoList">
      {todos.map((todo, index) => (
        <li key={index} className={todo.completed ? 'completed' : ''}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(index)}
          />
          {todo.text}
          <div className="RemoveButton" onClick={() => onRemove(index)}>
            <TrashCan />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
