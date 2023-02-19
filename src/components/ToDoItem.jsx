import React from 'react';
// Tabler Icon
import { IconTargetArrow, IconTrash } from '@tabler/icons';

// From Mantine
import { Card, Checkbox, Flex, ThemeIcon, Tooltip } from '@mantine/core';

function ToDoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <Card sx={{ overflow: 'visible', marginBottom: 10 }}>
      <Flex gap="md">
        <Checkbox
          label={todo.task}
          sx={{
            flexGrow: 1,
            textDecoration: todo.isComplete ? 'line-through' : 'none',
          }}
          checked={todo.isComplete}
          onChange={() => toggleTodo(todo.id)}
        />
        <Tooltip
          label="delete"
          transition="slide-up"
          withArrow
          color="green"
          sx={{ fontSize: 14 }}>
          <ThemeIcon
            color="green"
            sx={{ cursor: 'pointer' }}
            onClick={() => deleteTodo(todo.id)}>
            <IconTrash size={18} />
          </ThemeIcon>
        </Tooltip>
      </Flex>
    </Card>
  );
}

export default ToDoItem;
