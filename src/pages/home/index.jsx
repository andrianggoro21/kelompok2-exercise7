import Navbar from "../../components/navbar";
import { Box } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
const Home = () => {
    return (
        <>
            <Navbar/>
            <Box maxW='100vw' minH='100vh' backgroundColor='#000000' display='flex' justifyContent='center' paddingTop='300px'>
                <Heading color='#ffffff' textAlign='center'>Welcome to Exercise 7 <br/> Module Front Web Development </Heading>
            </Box>
        </>
        
        
    )

}
export default Home;