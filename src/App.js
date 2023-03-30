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

function App() {
  const { data: userData = [], isLoading: isUsersLoading } = useGetUsersQuery();
  const { data: desktopData = [], isLoading: isdesktopLoading } =
    useGetDesktopsQuery();
  const { data: monitorsData = [], isLoading: isMonitorsLoading } =
    useGetMonitorsQuery();

  console.log("desktopData -->", desktopData);
  //console.log('isDevicesDataLoasing -->', isDevicesDataLoading)

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Users users={userData} isLoading={isUsersLoading} />}
        />
        <Route
          path="/:userid"
          element={<UserInfo users={userData} isLoading={isUsersLoading} />}
        />

        <Route path="sklad" element={<Sklad />}>
          <Route
            index
            element={
              <AllDevices
                desktopData={desktopData}
                isdesktopLoading={isdesktopLoading}
              />
            }
          />
          <Route path="desktop" element={<Desktop />} />
          <Route
            path="monitors"
            element={
              <Monitors monitorsData={monitorsData}/>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
