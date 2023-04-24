import React, { useState } from "react";
import MonitorItem from "../../component/MonitorItem/MonitorItem";
import AddMonitorForm from "../../component/AddMonitorForm/AddMonitorForm";
import "./monitors.css";

function Monitors({ monitorsData, userData }) {
  return (
    <div className="monitors">
      <AddMonitorForm />
      <div className="monitors_title">Список Моніторів</div>
      {monitorsData.map((item) => (
        <MonitorItem key={item.monitorNo} monitor={item} userData={userData} />
      ))}
    </div>
  );
}

export default Monitors;
