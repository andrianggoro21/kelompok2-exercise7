import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Text, Heading} from '@chakra-ui/react';
import Navbar from "../../components/navbar";

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    const startHandler = () => {
        setRunning(true)
    }

    const stopHandler = () => {
        setRunning(false)
    }

    const resetHandler = () => {
        setTime(0)
        setRunning(false)
    }

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => setTime(time + 1),5)
        }
        return () => clearInterval(interval);
    }, [running, time]);

    const seconds = Math.floor((time % 6000) / 100);
    const minutes = Math.floor((time % 360000) / 6000);

    return (
        <>
            <Navbar/>
            <Box maxW='100vw' minH='100vh' display='flex' justifyContent='center' paddingTop='150px'>
                <Box backgroundColor='#000000' display='flex' alignItems='center' justifyContent='center' flexDirection='column' gap='30px' h='40vh' sx={{w: {xs:'75vw', sm:'70vw', md:'60vw', lg:'50vw', xl:'40vw', '2xl':'30vw'}}} borderRadius='2%'>
                    <Heading color='#ffffff' as='h1' size='4xl'>{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}</Heading>
                    <Box display='flex' gap='20px'>
                        <Button colorScheme='green' onClick={startHandler}>Start</Button>
                        <Button colorScheme='red' onClick={stopHandler}>Stop</Button>
                        <Button colorScheme='yellow' color='#ffffff' onClick={resetHandler}>Reset</Button>
                    </Box>
                </Box>
            </Box>
        </>
        
    )
}

export default Stopwatch;