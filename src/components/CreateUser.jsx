import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!, $age: Int!) {
    createUser(name: $name, email: $email, age: $age) {
      id
      name
      email
    }
  }
`;

function CreateUser() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    age: '',
  });

  const [createUser, { loading, error, data }] = useMutation(CREATE_USER, {
    onError(e) {
      console.log('here', e);
    },
  });

  function changeHandler(event) {
    event.preventDefault();
    console.log(formValues);
    setFormValues((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }

  async function submitHandler(event) {
    // convert age to integer
    event.preventDefault();
    formValues.age = parseInt(formValues.age);
    // call mutate function
    await createUser({ variables: formValues });
  }

  return (
    <form
      onSubmit={submitHandler}
      className="bg-gray-800 w-1/2 flex flex-col mx-auto space-y-2 p-3"
    >
      <input
        className="bg-gray-100 border p-1"
        type="text"
        placeholder="name"
        name="name"
        onChange={changeHandler}
      />
      <input
        className="bg-gray-100 border p-1"
        type="text"
        placeholder="email"
        name="email"
        onChange={changeHandler}
      />
      <input
        className="bg-gray-100 border p-1"
        type="text"
        placeholder="age"
        name="age"
        onChange={changeHandler}
      />
      <input className="bg-blue-300 w-auto" type="submit" value="Create" />
      {loading ? <p className="text-white">loading</p> : null}
      {error ? <p className="text-white">error</p> : null}
    </form>
  );
}

export default CreateUser;
