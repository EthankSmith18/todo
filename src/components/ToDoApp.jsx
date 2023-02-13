//  React
import React from 'react';
import { useState } from 'react';

//  Mantine Components
import { Container } from '@mantine/core';

// UUID - guarantees unique identifier for each item
import { v4 as uuidv4 } from 'uuid';

// To Do Components
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function ToDoApp() {
  const [todos, setTodos] = useState([]);
  // Adds identifier to new to do task, assigns new task to task, is complete is always false at creation
  const addTodo = (newTask) => {
    const newTodo = {
      id: uuidv4(),
      task: newTask,
      isComplete: false,
    };
    setTodos([
      // spread current todos so they are not overwritten
      ...todos,
      // adds newTodo
      newTodo,
    ]);
  };
  // returns todo to map no matter what, if there is a match on the id, isComplete is toggled
  const toggleTodo = (targetId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === targetId) {
        todo = {
          ...todo,
          isComplete: !todo.isComplete,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Deletes item from list
  const deleteTodo = (targetId) => {
    const filteredTodos = todos.filter((todo) => todo.id != targetId);
    setTodos(filteredTodos);
  };

  return (
    <Container sx={{ marginTop: 20 }}>
      <h1>To Do List</h1>
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </Container>
  );
}

export default ToDoApp;
