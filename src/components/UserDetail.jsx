import React from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import DeleteButton from './DeleteButton';

const GET_USER = gql`
  query getUser($email: String!) {
    getUser(email: $email) {
      id
      name
      email
      age
    }
  }
`;

function UserDetail({ userEmail, onClick }) {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { email: userEmail },
  });

  function clickHandler() {
    onClick(() => ({ active: false, user: '' }));
  }

  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  if (data) {
    return (
      <>
        <div className="m-5">
          <button
            className="bg-gray-800 p-2 text-white"
            type="button"
            onClick={clickHandler}
          >
            Back
          </button>
        </div>
        <div className="card w-1/2 mx-auto my-5 p-3">
          <p>{data.getUser.id}</p>
          <p>{data.getUser.name}</p>
          <p>{data.getUser.email}</p>
          <p>{data.getUser.age}</p>
          <DeleteButton userEmail={userEmail} />
        </div>
      </>
    );
  }
}

export default UserDetail;
