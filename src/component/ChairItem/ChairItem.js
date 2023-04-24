import React, { useState } from "react";
import "./chairItem.css";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { useDeleteChairMutation } from "../../redux/chairApi";
import { useUpdateUserMutation } from "../../redux/usersApi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function ChairItem({ chairData, userData }) {
  const [openModal, setOpenModal] = useState(false);
  const [deleteChair] = useDeleteChairMutation();
  const [updateUser] = useUpdateUserMutation();

  async function deleteChairHandler() {
    await deleteChair(chairData?.id);

    if (chairData?.master) {
      const [userMasterDataChair] = userData.filter(
        (item) => item?.userName === chairData?.master
      );

      await updateUser({
        ...userMasterDataChair,
        chairs: userMasterDataChair?.chairs?.filter((i) => i !== chairData?.chairNo),
      });
    }
    toast.success(`Стілець No: ${chairData?.chairNo} успішно видалено!`);
  }

  return (
    <>
      <div className="chair">
        <div className="chair_info">
          <p className="chair_info_title">
            No: <span>{chairData.chairNo}</span>
          </p>
          <p className="chair_info_title">
            власник: <span>{!chairData.master ? "вільний" : chairData.master}</span>
          </p>
        </div>
        <div className="chair_info_btn_holder">
          <Link className="chair_icon chair_edit_icon"  to={`${chairData.chairNo}`}>&#x270E;</Link>
          <div
            className="chair_icon chair_delete_icon"
            onClick={() => setOpenModal(true)}
          >
            &#x2718;
          </div>
        </div>
      </div>

      <ConfirmModal
        open={openModal}
        setOpen={setOpenModal}
        modalAction={deleteChairHandler}
        modalTitle={"Видалити стілець"}
        modalText={
          !chairData?.master
            ? "Дана операція видалить даний стілець з загального списку"
            : `Зверніть УВАГУ! Стілець закріплено за прівником. Даний стілець буде видалений із списку пристроїв, що використовуються працівником`
        }
      />
    </>
  );
}
