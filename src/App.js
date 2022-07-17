import './App.css';
import Login from './components/Login';
import Detail from './components/Detail'
import { Route, Routes } from 'react-router-dom';
import Private from './components/Private'
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>

function App() {
  const {token} = useContext(AuthContext)
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/detail' element={(!token.token)?<Login/>:<Detail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
