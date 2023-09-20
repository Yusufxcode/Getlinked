import { Box, HStack, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <Box display="flex" justifyContent="space-around" pt={10} pb={5}>
        <Text fontSize="36" color="white" className="logo">
          get<span className="linked">linked</span>
        </Text>
        <HStack gap={10}>
          <Text className="nav-link">Timeline</Text>
          <Text className="nav-link">Overview</Text>
          <Text className="nav-link">FAQs</Text>
          <Text className="nav-link">Contact</Text>
        </HStack>
        <button className="register-btn">Register</button>
      </Box>
      <hr />
    </>
  );
};

export default NavBar;
