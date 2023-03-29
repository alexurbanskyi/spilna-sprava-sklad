import React from "react";
import Loader from "../../component/Loader/Loader";
import { useAddDesktopMutation } from "../../redux/devicesApi";
import "./allDevices.css";

function AllDevices({ isdesktopLoading, desktopData }) {

 
  return (
    <div className="all_devices">
    All devices
    </div>
  );
}

export default AllDevices;
