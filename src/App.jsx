import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import TodoCard from './components/TodoCard';
import TodoContainer from './components/TodoContainer';
import UserContainer from './components/UserContainer';

const getAllUsers = gql`
  query myQuery {
    getAllUsers {
      email
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(getAllUsers);

  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;
  if (data) {
    console.log(data);
    return (
      <div className="">
        <UserContainer users={data.getAllUsers} />
      </div>
    );
  }
}

export default App;
