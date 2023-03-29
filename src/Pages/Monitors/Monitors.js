import React, { useState } from "react";
import AddMonitorForm from '../../component/AddMonitorForm/AddMonitorForm'
import "./monitors.css";

function Monitors() {
  
 

  return (
    <div className="monitors">
      <AddMonitorForm />
      <div className="monitors_title">Список Моніторів</div>
    </div>
  );
}

export default Monitors;
