import './style.css';
import { Box } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import Navbar from "../../components/navbar";

const Chat = () => {
    const location = useLocation();
    const input = location.state.input
    return(
        <>
            <Navbar/>
            <Box maxW='100vw' minH='100vh' display='flex' alignItems='center' flexDirection='column' backgroundColor='#000000' paddingTop='150px'>
                <Box  display='flex' alignItems='center' justifyContent='center' flexDirection='column' gap='30px'>
                    <Heading color='#ffffff'>ChitChat - Express Your Feeling</Heading>
                    <Box display='flex' alignItems='center' justifyContent='center' gap='25px'>
                        <box-icon name='user-circle' color='#0000FF' size="75px"></box-icon>
                        <span className='span'>{input}</span>
                    </Box>
                </Box>
                
            </Box>
        </>
    )
}
export default Chat;