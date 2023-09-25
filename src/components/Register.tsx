import {
  Box,
  Flex,
  FormLabel,
  HStack,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import background from "../assets/images/Register Background.png";
import man from "../assets/images/RegistraionMan.png";
const Register = () => {
  return (
    <HStack>
      <Box>
        <Image src={man} />
      </Box>

      <Box>
        <Image src={background} />
        <Box color={"white"}>
          <Text color="#D434FE" fontWeight={"bold"}>
            Register
          </Text>
          <Text>Be part of this movement............</Text>
          <Text>CREATE YOUR ACCOUNT</Text>
          <Flex direction="row" gap={5}>
            <Box>
              <Box>
                <FormLabel>Team's Name</FormLabel>
                <Input placeholder="" />
              </Box>
              <Box>
                <FormLabel>Team's Name</FormLabel>
                <Input placeholder="" />
              </Box>
              <Box>
                <FormLabel>Team's Name</FormLabel>
                <Input placeholder="" />
              </Box>
            </Box>

            <Box>
              <Box>
                <FormLabel>Team's Name</FormLabel>
                <Input placeholder="" />
              </Box>
              <Box>
                <FormLabel>Team's Name</FormLabel>
                <Input placeholder="" />
              </Box>
              <Box>
                <FormLabel>Team's Name</FormLabel>
                <Input placeholder="" />
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </HStack>
  );
};

export default Register;
