import React, { useState } from "react";
import AddMonitorForm from "../../component/AddMonitorForm/AddMonitorForm";
import "./monitors.css";

function Monitors({ monitorsData }) {
  console.log("monitorsData -->", monitorsData);

  function MonitorItem({ monitor }) {
    return (
      <div className="monitorItem">
        <div className="monitorItem_info_wrapper">
          <p className="monitorItem_info">No: <span> {monitor?.monitorNo}</span></p>
          <p className="monitorItem_info">Бренд: <span>{monitor?.brand}</span> </p>
          <p className="monitorItem_info">Диагональ: <span>"{monitor?.diagonal}</span> </p>
          <p className="monitorItem_info">
            Власник:{" "}
            {!monitor?.master ? (
              <span>вільний</span>
            ) : (
              <span>{monitor?.master}</span>
            )}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="monitors">
      <AddMonitorForm />
      <div className="monitors_title">Список Моніторів</div>
      {
        monitorsData.map((item) =>  <MonitorItem monitor={item} />)
      }
     
    </div>
  );
}

export default Monitors;
