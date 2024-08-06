// src/components/TodoInput.jsx
import React, { useState } from 'react';
import { TextInput } from 'carbon-components-react';
import { Add } from '@carbon/icons-react';
import './TodoInput.css'; // Import the CSS file for specific styles

function TodoInput({ onAdd }) {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      onAdd(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="TodoInput">
      <TextInput
        id="todo-input"
        placeholder="Enter a new to-do"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="AddButton" onClick={handleAdd}>
        <Add />
      </div>
    </div>
  );
}

export default TodoInput;
