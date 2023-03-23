import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./Pages/Users/Users.js";
import Header from "./component/Header/Header";
import Sklad from "./Pages/Sklad/Sklad";
import { useGetUsersQuery } from "./redux/usersApi";
import Desktop from "./component/Desktop/Desktop";
import { useGetDevicesQuery } from "./redux/devicesApi";
import AllDevices from "./component/AllDevices/AllDevices";


function App() {
  const { data = [], isLoading: isUsersLoading } = useGetUsersQuery();
  const { data: devicesData = [] , isLoading: isDevicesDataLoading } = useGetDevicesQuery()

  console.log('devicesData -->', devicesData)
  console.log('isDevicesDataLoasing -->', isDevicesDataLoading)
  
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Users users={data} isLoading={isUsersLoading} />}
        />
        <Route path="sklad" element={<Sklad />}>
          <Route index element={<AllDevices/>}/>
          <Route path="desktop" element={<Desktop/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
