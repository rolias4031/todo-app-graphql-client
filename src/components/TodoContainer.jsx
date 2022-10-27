import React from 'react';
import TodoCard from './TodoCard';

function TodoContainer({ todos }) {
  const todoCards = todos.map((todo) => {
    return <TodoCard data={todo} />;
  });

  return <div>{todoCards}</div>;
}

export default TodoContainer;
