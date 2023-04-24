import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./chairInfo.css";
import ConfirmModal from "../../component/ConfirmModal/ConfirmModal";
import { useUpdateUserMutation } from "../../redux/usersApi";
import { useUpdateChairMasterMutation } from "../../redux/chairApi";
import { toast } from "react-toastify";

function ChairInfo({ chairsData, userData }) {
  const params = useParams();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [choosenMaster, setChoosenMaster] = useState("");
  const [updateUser] = useUpdateUserMutation();
  const [updateChairMaster] = useUpdateChairMasterMutation();

  // find chair data {object}
  const [chairData] = chairsData.filter(
    (item) => item.chairNo === params.chair
  );

  console.log("chairData ->", chairData);
  // if chair has master than find info about this user
  let userMasterChairData = {};

  if (chairData?.master?.length) {
    [userMasterChairData] = userData.filter(
      (item) => item?.userName === chairData?.master
    );
  }
  console.log("userMasterChairData ->", userMasterChairData);

  // if monitor has master - list filtering and remove user from the list
  const userForSelect = userData.filter(
    (item) => item.userName !== userMasterChairData?.userName
  );
  console.log("userForSelect ->", userForSelect);

  // user data after select user from list
  const [choosenMasterData] = userData.filter(
    (user) => user.userName === choosenMaster
  );
  console.log("choosenMasterData -->", choosenMasterData);

  function SelectMaster() {
    return (
      <>
        <select
          className="select_master"
          value={choosenMaster}
          onChange={(event) => setChoosenMaster(event.target.value)}
        >
          <option value="" disabled>
            оберіть працівника
          </option>
          {userForSelect.map((user) => (
            <option key={user.cardId} value={user.userName}>
              {user.userName}
            </option>
          ))}
        </select>
      </>
    );
  }

  async function changeMaster(){
    await updateChairMaster({ ...chairData, master: choosenMaster });

    // if monitor has master and we change it --> delete monitor from old master`s list
    if (Object.keys(userMasterChairData).length !== 0){

      await updateUser({
        ...userMasterChairData,
        chairs: userMasterChairData?.chairs?.filter(
          (i) => i !== chairData?.chairNo
        ),
      });
    }
    //

    await updateUser({
      ...choosenMasterData,
      chairs: [...choosenMasterData.chairs, chairData.chairNo],
    });

    setIsEditMode(false);
    toast.success(
      `${choosenMaster} є власником монітору No: ${chairData?.chairNo}`
    );
    navigate(-1);
  }

  async function deleteMasterHandler(){
    // NULL in chair`s master field
    await updateChairMaster({ ...chairData, master: null });
    // filter user`s chair field [] and delete this chair from list
    await updateUser({
      ...userMasterChairData,
      chairs: userMasterChairData?.chairs?.filter(
        (i) => i !== chairData?.chairNo
      ),
    });
    toast.success(
      `Стілецю No: ${chairData?.chairNo} успішно додано статус "ВІЛЬНИЙ"`
    );
    navigate(-1);
  }

  return (
    <div className="chairInfo">
      <p className="chairInfo_title">
        No: <span>{chairData?.chairNo}</span>
      </p>
      <div className="chairInfo_master">
        <p className="chairInfo_master_title">Власник: </p>
        <div className="chairInfo_master_name">
          {chairData?.master && !isEditMode ? (
            <span>{chairData?.master}</span>
          ) : (
            <>{isEditMode ? <SelectMaster /> : <span>вільний</span>}</>
          )}
        </div>
      </div>


      <div className="chair_btn_holder">
        <button
          className="monitorInfo_btn delete_btn "
          onClick={() => setOpenModal(true)}
          disabled={isEditMode || !chairData?.master}
        >
          видалити влісника
        </button>

        {isEditMode ? (
          <button
            className="monitorInfo_btn change_btn"
            onClick={changeMaster}
            disabled={!choosenMaster}
          >
            зберігти
          </button>
        ) : (
          <button
            className="monitorInfo_btn change_btn"
            onClick={() => setIsEditMode(true)}
          >
            змінити власника
          </button>
        )}
      </div>
      <ConfirmModal
        open={openModal}
        setOpen={setOpenModal}
        modalAction={deleteMasterHandler}
        modalTitle={"Видалити власника"}
        modalText={"Дана операція надасть даному монітору статус 'Вільний'"}
      />



    </div>
  );
}

export default ChairInfo;
