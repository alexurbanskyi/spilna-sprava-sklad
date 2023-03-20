import './App.css';
import {Routes, Route} from 'react-router-dom'
import Users from './Pages/Users/Users.js';
import Header from './component/Header/Header';
import Sklad from './Pages/Sklad/Sklad';
import { useGetUsersQuery } from './redux/usersApi';

function App() {
  const {data=[], isLoading} = useGetUsersQuery()

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Users users={data} isLoading={isLoading}/>} />
      <Route path='sklad' element={<Sklad/>} />
    </Routes>
    </>
  );
}

export default App;
