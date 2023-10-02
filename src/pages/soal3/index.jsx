import {
  Box,
  FormControl,
  FormLabel,
  Input,
  List,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

const Soal3 = () => {
  const dummy = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
    "Strawberry",
    "Persimmon",
  ];
  const [searchDummy, setSearchDummy] = useState(dummy);

  const filterDummy = (event) => {
    const query = event.target.value;
    let updateList = [...dummy];
    updateList = updateList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setSearchDummy(updateList);
  };

  return (
    <Box h="100vh" w="100vw" align="center" mt="40px" fontFamily="roboto">
      <Box
        bgGradient="linear(to-br, yellow.200, red, purple.600)"
        p="1em"
        w="700px"
        borderRadius="10px"
      >
        <FormControl
          onChange={filterDummy}
          flexDirection="row"
          display="flex"
          justifyContent="center"
        >
          <FormLabel fontWeight="medium" fontSize="19px">
            Search :{" "}
          </FormLabel>
          <Input
            placeholder="Ketik Untuk Mencari Data"
            h="30px"
            w="310px"
            bg="white"
          />
        </FormControl>
        <Box p="10px">
          {searchDummy.map((item, index) => (
            <List p="10px">
              <Button
                key={index}
                h="23px"
                w="125px"
                fontWeight="light"
                fontSize="19px"
              >
                {item}
              </Button>
            </List>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Soal3;
