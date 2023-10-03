import './style.css';
import { useState } from 'react'
import { Box } from '@chakra-ui/react';
import { Heading} from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/navbar";

const ChitChat = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate()

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const addChat = (e) => {
        navigate('/chat', {state: {input}})
    }
    
    return (
        <>
            <Navbar/>
            <Box maxW='100vw' minH='100vh' display='flex' alignItems='center' flexDirection='column' gap='50px' paddingTop='150px' backgroundColor='#5a5a5a'>
                <Box backgroundColor='#000000' display='flex' alignItems='center' justifyContent='center' flexDirection='column' gap='70px'  borderRadius='10px' h='50vh' sx={{w: {xs:'75vw', sm:'70vw', md:'60vw', lg:'50vw', xl:'40vw', '2xl':'30vw'}}}>
                    <Heading color='#ffffff'>ChitChat - Express Your Feeling</Heading>
                    <form className='form' >
                        <Textarea variant='filled' color='#ffffff' w='400px' h='200px' placeholder="What's on your mind?" onChange={handleChange}/>
                        <Button type='submit' colorScheme='blue' onClick={addChat}><box-icon name='send' type='solid' color='#ffffff'></box-icon></Button>
                    </form>
                </Box>
            </Box>
        </>
        
    )
}

export default ChitChat;