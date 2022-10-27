import React from 'react';

function UserCard({ user, onClick }) {
  function clickHandler(event) {
    event.preventDefault();
    console.log(event.target.innerHTML);
    onClick(() => ({ active: true, user: event.target.innerHTML }));
  }
  return (
    <div className="card w-1/2 mx-auto my-5 p-3 flex flex-col">
      <p onClick={clickHandler} className="cursor-pointer">
        {user.email}
      </p>
    </div>
  );
}

export default UserCard;
