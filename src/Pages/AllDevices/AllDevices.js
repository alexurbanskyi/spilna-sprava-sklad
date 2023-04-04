import React from "react";
import Loader from "../../component/Loader/Loader";
import { useAddDesktopMutation } from "../../redux/devicesApi";
import Circle from "../../component/Circle/Circle";
import { FiMonitor } from "react-icons/fi";
import "./allDevices.css";

function AllDevices({ monitorsData }) {
  function DeviceItem({ itemData, IconItem }) {
    const itemHasMaster = itemData.filter(
      (item) => item?.master?.length
    )?.length;
    const freeItem = itemData.filter((item) => item?.master === null).length;
    const percent = Math.floor((itemHasMaster / monitorsData.length) * 100);

    console.log("itemHasMaster -->", itemHasMaster);
    console.log("freeItem -->", freeItem);
    console.log("percent -->", percent);

    return (
      <div className="deviceItem">
        <div>
          <Circle percent={percent} />
        </div>
        <div className="deviceItem_info">
          <IconItem className="deviceItem_icon" />
          <div className="deviceItem_info_holder">
            <p className="deviceItem_info_title">
              вільних: <span>{freeItem}</span>
            </p>
            <p className="deviceItem_info_title">
              використовуються: <span>{itemHasMaster}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="all_devices">
      <div className="all_devices_title">Перелік Обладнання</div>
      <DeviceItem itemData={monitorsData} IconItem={FiMonitor} />
    </div>
  );
}

export default AllDevices;
