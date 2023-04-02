import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useDeleteMonitorMutation,
  useUpdateMonitorMasterMutation,
} from "../../redux/devicesApi";
import ConfirmModal from "../../component/ConfirmModal/ConfirmModal";
import { toast } from "react-toastify";
import "./monitorInfo.css";

function MonitorInfo({ monitorsData, userData }) {
  const [openModal, setOpenModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [choosenMaster, setChoosenMaster] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const [deleteMonitor] = useDeleteMonitorMutation();
  const [updateMonitorMaster] = useUpdateMonitorMasterMutation();

  // find monitor data {object}
  const [monitorData] = monitorsData.filter(
    (item) => item.monitorNo === params.monitor
  );

  // select for all users
  function SelecrMaster() {
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
          {/* <option value="Vova">Vova</option>
          <option value="Tom">Tom</option>
          <option value="Bob">Bob</option> */}
          {
            userData.map((user) => <option value={user.userName}>{user.userName}</option>)
          }
        </select>
      </>
    );
  }

  // function delete master if monitor has master
  async function deleteMasterHandler() {
    await updateMonitorMaster({ ...monitorData, master: null });
    toast.success(
      `Монітор No: ${monitorData?.monitorNo} успішно додано статус "ВІЛЬНИЙ"`
    );
    navigate(-1);
  }

  // function change master after select from list
  async function changeMaster() {
    if (!changeMaster) {
      setIsEditMode(true);
    } else {
      await updateMonitorMaster({ ...monitorData, master: choosenMaster });
      setIsEditMode(false);
      toast.success(
        `${choosenMaster} є власником монітору No: ${monitorData?.monitorNo}`
      );
    }
  }

  return (
    <div className="monitorInfo">
      <p className="monitorInfo_title">
        No: <span> {monitorData?.monitorNo}</span>
      </p>

      <p className="monitorInfo_title">
        Бренд: <span>{monitorData?.brand}</span>
      </p>
      <p className="monitorInfo_title">
        Диагональ: <span>"{monitorData?.diagonal}</span>
      </p>
      <div className="monitorInfo_master">
        <p className="monitorInfo_master_title"> Власник:</p>
        <div className="monitorInfo_master_name">
          {monitorData?.master && !isEditMode ? (
            <span>{monitorData?.master}</span>
          ) : (
            <>{isEditMode ? <SelecrMaster /> : <span>вільний</span>}</>
          )}
        </div>
      </div>
      <div className="monitorInfo_btn_holder">
        <button
          className="monitorInfo_btn delete_btn "
          onClick={() => setOpenModal(true)}
          disabled={isEditMode || !monitorData?.master}
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

export default MonitorInfo;