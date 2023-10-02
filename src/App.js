import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Stopwatch from './pages/soal2';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/soal2' element={<Stopwatch/>}/>

    </Routes>
    
  );
}

export default App;
