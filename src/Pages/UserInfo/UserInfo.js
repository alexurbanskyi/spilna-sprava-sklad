import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useUpdateUserMutation } from "../../redux/usersApi";
import {useNavigate} from 'react-router-dom'

function UserInfo({ users }) {
  const params = useParams();
  const navigate = useNavigate()
  const [edit, setEdit] = useState(false);
  const [userCardId, setUserCardId] = useState("");

  const [updateUser] = useUpdateUserMutation()
  const userData = users.find((item) => item.cardId === params.userid);

  // console.log('usersData -->', users)
  // console.log('userData -->', userData)
  return (
    <div>
      {!edit ? (
        <button
          onClick={() => {
            setEdit(true);
            setUserCardId(userData?.cardId);
          }}
        >
          EDIT
        </button>
      ) : (
        <button
          onClick={() => {
            setEdit(false);
            updateUser({...userData, cardId: userCardId  })
            navigate('/')
          }}
        >
          SAVE
        </button>
      )}
      INFO:
      {!edit ? (
        <div>Card ID -- {userData?.cardId}</div>
      ) : (
        <div>
          <label>Card ID -- </label>
          <input
            value={userCardId}
            onChange={(e) => setUserCardId(e.target.value)}
          />
        </div>
      )}
      <div>І'мя -- {userData?.userName}</div>
    </div>
  );
}

export default UserInfo;
