import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Stopwatch from './pages/soal2';
import ChitChat from './pages/soal5';
import Chat from './pages/soal5/chat';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/soal2' element={<Stopwatch/>}/>
      <Route path='/soal5' element={<ChitChat/>}/>
      <Route path='/chat' element={<Chat/>}/>
    </Routes>
    
  );
}

export default App;
