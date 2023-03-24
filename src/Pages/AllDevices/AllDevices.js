import React from "react";
import Loader from "../../component/Loader/Loader";
import { useAddDesktopMutation } from "../../redux/devicesApi";
import "./allDevices.css";

function AllDevices({ isdesktopLoading, desktopData }) {
  const DESKTOPS = desktopData;
  const MONITORS = [];

  const [addDesktop] = useAddDesktopMutation();

  async function addDesk() {
    await addDesktop({
      desktopId: 11,
      videoCard: "GForce 4600",
      master: null,
    });
  }

  function DeviceItem({ device, deviceName }) {
    const freeDevices = device?.filter((item) => !item.master);
    const slaveDevices = device?.filter((item) => item.master);
    // console.log("free -->", freeDevices);
    // console.log("slave -->", slaveDevices);
    return (
      <div className="device_item">
        <div className="device_item_title">{deviceName}</div>
        <div>Вільні - {freeDevices?.length}</div>
        <div>Використовують - {slaveDevices?.length}</div>
        <button onClick={addDesk}>add desk</button>
      </div>
    );
  }

  return (
    <div className="all_devices">
      {isdesktopLoading ? (
        <Loader />
      ) : (
        <DeviceItem device={DESKTOPS} deviceName="Монітори" />
      )}
    </div>
  );
}

export default AllDevices;
