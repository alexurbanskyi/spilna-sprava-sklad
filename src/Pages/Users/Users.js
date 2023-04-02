import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddUserModal from "../../component/AddUserModal/AddUserModal";
import Circle from "../../component/circle/Circle";
import DeleteUserModal from "../../component/DeleteUserModal/DeleteUserModal";
import Loader from "../../component/Loader/Loader";
import { useUpdateUserMutation } from "../../redux/usersApi";

import "./users.css";

function Users({ users, isLoading }) {
  const [openAddModa, setOpenAddModal] = useState(false);
  const [openDeleteModa, setDeleteAddModal] = useState(false);
  const [userdata, setUserData] = useState(null);
  const [updateUser] = useUpdateUserMutation();

  function deleteUserModal(data) {
    setUserData(data);
    setDeleteAddModal(true);
  }

  // let us = {
  //   cardId: "34",
  //   userName: "Вова Вова",
  //   id: 3,
  // };
  // async function uppp() {
  //   await updateUser({ ...us, userName: "UPDATE" });
  // }

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
                <Link to={`/${user.cardId}`} className="user_icon edit_icon ">
                  &#x270E;
                </Link>
                <div
                  className="user_icon delete_icon"
                  onClick={() => deleteUserModal(user)}
                >
                  &#x2718;
                </div>
              </div>
            </div>
          ))}
          {/* <button onClick={uppp}>update</button> */}
          <div
            className="user_add_button"
            onClick={() => setOpenAddModal(true)}
          >
            +
          </div>

          <AddUserModal
            open={openAddModa}
            setOpen={setOpenAddModal}
            users={users}
          />
          <DeleteUserModal
            open={openDeleteModa}
            setOpen={setDeleteAddModal}
            userData={userdata}
          />
          <Circle percent={45}/>
        </div>
      )} 
    </>
  );
}

export default Users;
