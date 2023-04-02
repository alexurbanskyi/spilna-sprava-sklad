import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { useDeleteMonitorMutation } from "../../redux/devicesApi";
import { toast } from "react-toastify";
import "./monitorItem.css";

function MonitorItem({ monitor }) {
  const [openModal, setOpenModal] = useState(false);
  const [deleteMonitor] = useDeleteMonitorMutation();

  async function deleteMonitorHandler() {
    await deleteMonitor(monitor?.id);
    toast.success(`Монітор  No: ${monitor?.monitorNo} успішно видалено!`);
  }

  return (
    <div className="monitorItem">
      <div className="monitorItem_info_wrapper">
        <p className="monitorItem_info">
          No: <span> {monitor?.monitorNo}</span>
        </p>
        <p className="monitorItem_info">
          Бренд: <span> {monitor?.brand}</span>
        </p>
        <p className="monitorItem_info">
          Диагональ: <span> "{monitor?.diagonal}</span>
        </p>
        <p className="monitorItem_info">
          Власник:
          {!monitor?.master ? (
            <span> вільний</span>
          ) : (
            <span> {monitor?.master}</span>
          )}
        </p>
      </div>
      <div className="monitorItem_btn_holder">
        <Link
          to={`${monitor.monitorNo}`}
          className="monitor_icon monitor_edit_icon "
        >
          &#x270E;
        </Link>
        <div
          className="monitor_icon monitor_delete_icon"
          onClick={() => setOpenModal(true)}
        >
          &#x2718;
        </div>
      </div>
      <ConfirmModal
        open={openModal}
        setOpen={setOpenModal}
        modalAction={deleteMonitorHandler}
        modalTitle={"Видалити монітор"}
        modalText={ !monitor?.master ? "Дана операція видалить даний монітор з загального списку" : `Зверніть УВАГУ! Монітор закріплено за прівником. Даний монітор буде видалений із списку пристроїв, що використовуються працівником`}
      />
    </div>
  );
}

export default MonitorItem;
