import React from 'react';
/* From React */
import { useState } from 'react';

/* From Mantine */
import { Button, Card, Flex, TextInput } from '@mantine/core';

function ToDoForm({ addTodo }) {
  // state variable that holds task entered by user
  const [task, setTask] = useState('');
  // state variable that ensures user has entered task before adding to list
  const [isValid, setIsValid] = useState(false);

  // Function for input
  const handleChange = (e) => {
    setTask(e.currentTarget.value);
    if (e.currentTarget.value.length >= 2) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleSubmit = (e) => {
    // prevents page refresh
    e.preventDefault();
    if (isValid) {
      // sends task to addTodo function, sets task box back to blank
      addTodo(task);
      setTask('');
    }
  };

  return (
    <Card sx={{ marginBottom: 20, padding: 'md' }}>
      <form onSubmit={handleSubmit}>
        <Flex gap="md">
          <TextInput
            sx={{ flexGrow: 1 }}
            placeholder="What needs to get done?"
            value={task}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="gradient"
            gradient={{ from: 'grape', to: 'indigo' }}
            disabled={!isValid}>
            Add To Do
          </Button>
        </Flex>
      </form>
    </Card>
  );
}

export default ToDoForm;
