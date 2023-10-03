import './App.css';
import { Container, Box, Heading,} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { useState } from 'react';



function App() {
  const [count, setCount] = useState(0);
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

  const IncrementCount = () => {
    setCount(count + 1);
  };
  
    
  const DecrementCount = () => {
      setCount (count - 1);
  };

  return (
    
    
    <Container backgroundColor='black'maxW='50vw'minH='50vh'display='flex'alignItems='center' flexDirection='column' justifyContent='center' marginTop='10px'borderRadius='5%'>
      <div className='app'> 
      </div>


      <Box justifyContent='center' display='flex' flexDirection='row'> 
      <MinusIcon backgroundColor='red' boxSize='80px'alignItems='center' borderRadius='5%' onClick={DecrementCount} cursor='pointer'/>
      <Heading fontFamily='serif' onClick={IncrementCount} fontSize='140px' fontWeight='bold' color='white' marginTop='-50px' marginLeft='80px' marginRight='80px'>{count}</Heading>
      <AddIcon backgroundColor='green'boxSize='80px' borderRadius='5%' onClick={IncrementCount} alignItems='center' cursor='pointer'/> 
      </Box> 
    </Container>
   
  );
   
}
export default App;
