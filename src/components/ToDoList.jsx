import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, toggleTodo, deleteTodo }) {

  return todos.map((todo) => <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />);
}

export default ToDoList;
