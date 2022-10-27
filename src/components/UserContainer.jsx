import React, { useState } from 'react';
import CreateUser from './CreateUser';
import UserCard from './UserCard';
import UserDetail from './UserDetail';

function UserContainer({ users }) {
  console.log(users);

  const [detailMode, setDetailMode] = useState({
    active: false,
    user: '',
  });

  if (detailMode.active) {
    return <UserDetail userEmail={detailMode.user} onClick={setDetailMode} />;
  }

  const userCards = users.map((user) => {
    return <UserCard user={user} onClick={setDetailMode} key={user.email} />;
  });
  return (
    <>
      {userCards}
      <CreateUser />
    </>
  );
}

export default UserContainer;
