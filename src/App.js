import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./Pages/Users/Users.js";
import Header from "./component/Header/Header";
import Sklad from "./Pages/Sklad/Sklad";
import { useGetUsersQuery } from "./redux/usersApi";
import Desktop from "./Pages/Desktop/Desktop";
import {
  useGetDesktopsQuery,
  useGetDevicesQuery,
  useGetMonitorsQuery,
} from "./redux/devicesApi";
import AllDevices from "./Pages/AllDevices/AllDevices";
import Monitors from "./Pages/Monitors/Monitors";
import UserInfo from "./Pages/UserInfo/UserInfo";
import MonitorInfo from "./Pages/MonitorInfo/MonitorInfo";
import Chairs from "./Pages/Chairs/Chairs";
import { useGetChairsQuery } from "./redux/chairApi";
import ChairInfo from "./Pages/ChairInfo/ChairInfo";

function App() {
  const { data: userData = [], isLoading: isUsersLoading } = useGetUsersQuery();
  const { data: desktopData = [], isLoading: isdesktopLoading } =
    useGetDesktopsQuery();
  const { data: monitorsData = [], isLoading: isMonitorsLoading } =
    useGetMonitorsQuery();
  const { data: chairsData = [] } = useGetChairsQuery();

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Users
              usersData={userData}
              isLoading={isUsersLoading}
              monitorsData={monitorsData}
              chairsData={chairsData}
            />
          }
        />
        <Route
          path="/:userid"
          element={
            <UserInfo
              users={userData}
              isLoading={isUsersLoading}
              monitorsData={monitorsData}
              chairsData={chairsData}
            />
          }
        />

        <Route path="sklad" element={<Sklad />}>
          <Route index element={<AllDevices monitorsData={monitorsData} chairsData={chairsData}/>} />
          <Route
            path="monitors"
            element={
              <Monitors monitorsData={monitorsData} userData={userData} />
            }
          />
          <Route
            path="monitors/:monitor"
            element={
              <MonitorInfo monitorsData={monitorsData} userData={userData} />
            }
          />
          <Route path="chairs" element={<Chairs chairsData={chairsData} userData={userData}/>} />
          <Route
            path="chairs/:chair"
            element={
              <ChairInfo chairsData={chairsData} userData={userData} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
