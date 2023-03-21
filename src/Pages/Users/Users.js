import React, { useState } from "react";
import AddUserModal from "../../component/AddUserModal/AddUserModal";
import DeleteUserModal from "../../component/DeleteUserModal/DeleteUserModal";
import Loader from "../../component/Loader/Loader";

import "./users.css";

function Users({ users, isLoading }) {
  const [openAddModa, setOpenAddModal] = useState(false);
  const [openDeleteModa, setDeleteAddModal] = useState(false);
  const [userdata, setUserData] = useState(null);

 function deleteUserModal(data) {
    setUserData(data);
    setDeleteAddModal(true);
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="users">
          <div className="users_title">Список працівників:</div>
          {users.map((user) => (
            <div className="users_item" key={user.cardId}>
              <p className="user_name">
                <span>card ID: </span>
                {user.cardId} - {user.userName}
              </p>
              <div className="user_icons">
                <div className="user_icon edit_icon">&#x270E;</div>
                <div
                  className="user_icon delete_icon"
                  onClick={() => deleteUserModal(user)}
                >
                  &#x2718;
                </div>
              </div>
            </div>
          ))}
          <div
            className="user_add_button"
            onClick={() => setOpenAddModal(true)}
          >
            +
          </div>
          <AddUserModal open={openAddModa} setOpen={setOpenAddModal} users={users} />
          <DeleteUserModal
            open={openDeleteModa}
            setOpen={setDeleteAddModal}
            userData={userdata}
          />
        </div>
      )}
    </>
  );
}

export default Users;
