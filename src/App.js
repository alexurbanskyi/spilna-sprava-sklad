import './App.css';
import {Routes, Route} from 'react-router-dom'
import Users from './Pages/Users/Users.js';
import Header from './component/Header/Header';
import Sklad from './Pages/Sklad/Sklad';

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Users/>} />
      <Route path='sklad' element={<Sklad/>} />
    </Routes>
    </>
  );
}

export default App;
