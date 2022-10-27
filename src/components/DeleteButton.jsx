import { useMutation, gql } from '@apollo/client';
import React from 'react';

const DELETE_USER = gql`
  mutation deleteUser($email: String!) {
    deleteUser(email: $email) {
      id
    }
  }
`;

function DeleteButton({ userEmail }) {
  const [deleteUser, { loading, error, data }] = useMutation(DELETE_USER);
  function deleteHandler() {
    deleteUser({ variables: { email: userEmail } });
  }
  return (
    <button
      onClick={deleteHandler}
      className="bg-white text-black p-2 my-3"
      type="button"
    >
      Delete
    </button>
  );
}

export default DeleteButton;
