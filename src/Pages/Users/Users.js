import React, { useState } from "react";
import AddUserModal from "../../component/AddUserModal/AddUserModal";
import Loader from "../../component/Loader/Loader";

import "./users.css";

function Users({ users, isLoading }) {
  const [open, setOpen] = useState(false)


  // console.log("Data user --->", users);


  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="users">
          <div className="users_title">Список працівників:</div>
          {users.map((user) => (
            <div className="users_item" key={user.cardId}>
              <p className="user_name"><span>card ID: </span>{user.cardId} - {user.userName}</p>
             <div className="user_icons" >
                <div className="user_icon edit_icon">&#x270E;</div>
                <div className="user_icon delete_icon">&#x2718;</div>
             </div>
            </div>
          ))}
          <div className="user_add_button" onClick={() => setOpen(true)}>+</div>
          <AddUserModal open={open} setOpen={setOpen} />
        </div>
      )}
    </>
  );
}

export default Users;
