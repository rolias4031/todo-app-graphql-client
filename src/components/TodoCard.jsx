import React from 'react';

function TodoCard({ data }) {
  return (
    <div className='bg-gray-800 w-1/2 h-1/2 flex flex-col'>
      <p>{data.id}</p>
      <p>{data.title}</p>
      <p>{data.description}</p>
      <p>{data.due_date}</p>
    </div>
  );
}

export default TodoCard;
