// src/components/TodoItem.jsx
import React from 'react';
import { Button, Checkbox, ListItem } from 'carbon-components-react';

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <ListItem key={todo.text} className={todo.completed ? 'completed' : ''}>
      <Checkbox
        id={`todo-checkbox-${todo.text}`}
        labelText={todo.text}
        checked={todo.completed}
        onChange={onToggle}
      />
      <Button onClick={onRemove} kind="danger">Remove</Button>
    </ListItem>
  );
}

export default TodoItem;
