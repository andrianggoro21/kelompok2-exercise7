import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Counter from './pages/soal1';
import Stopwatch from './pages/soal2';
import ChitChat from './pages/soal5';
import Chat from './pages/soal5/chat';
import Soal3 from './pages/soal3';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/soal1' element={<Counter/>}/>
      <Route path='/soal2' element={<Stopwatch/>}/>
      <Route path='/soal3' element={<Soal3/>}/>
      <Route path='/soal5' element={<ChitChat/>}/>
      <Route path='/chat' element={<Chat/>}/>
    </Routes>
    
  );
}

export default App;
