import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUpdateUserMutation } from "../../redux/usersApi";
import { FiMonitor } from "react-icons/fi";
import { AiOutlineIdcard } from "react-icons/ai";
import {GiOfficeChair} from 'react-icons/gi'
import './userInfo.css'

function UserInfo({ users, monitorsData=[], chairsData=[] }) {
  const params = useParams();

  const navigate = useNavigate();

  const userData = users.find((item) => item.cardId === params.userid);
  const userMonitors = userData?.monitors
  const userChairs = userData?.chairs

  const userMonitorsList = monitorsData?.filter((monitor) => userMonitors.find((i) => i ===  monitor.monitorNo))
  const userChairsList = chairsData?.filter((chair) => userChairs.find((i) => i ===  chair.chairNo))

  // console.log("userData ->", userData.userName);
  //  console.log("userMonitors ->", userMonitors);
  // console.log("userMonitorsList ->", userMonitorsList);

  return (
    <div className="user_info">
      <p className="user_info_name">{userData?.userName}</p>

      <div className="user_info_device">
        <div className="device_icon_holder">
          <AiOutlineIdcard className="device_icon" />
        </div>
        <div className="device_list">
          <p className="user_card">cardID: <span>{userData?.cardId}</span></p>
        </div>
      </div>

      <div className="user_info_device">
        <div className="device_icon_holder">
          <FiMonitor className="device_icon" />
        </div>
        <div className="device_list">
         {
          userMonitorsList.map((item) => <div className="user_monitor_list" key={item.id} >
            <p className="user_monitor_list_item">No: <span>{item.monitorNo}</span></p>
            <p className="user_monitor_list_item">Бранд: <span>{item.brand}</span></p>
            <p className="user_monitor_list_item">Диагональ: <span>"{item.diagonal}</span></p>
          </div>)
         }
        </div>
      </div>

      <div className="user_info_device">
        <div className="device_icon_holder">
          <GiOfficeChair className="device_icon" />
        </div>
        <div className="device_list">
         {
          userChairsList.map((item) => <div className="user_monitor_list" key={item.id}>
            <p className="user_monitor_list_item">No: <span>{item.chairNo}</span></p>
          </div>)
         }
        </div>
      </div>

    </div>
  );
}

export default UserInfo;
