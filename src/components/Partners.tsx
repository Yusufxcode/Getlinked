import { Box, Heading, Image, Text } from "@chakra-ui/react";
import lens from "../assets/images/Purple-Lens-Flare-PNG.png";
import sponsors from "../assets/images/Sponsors logo.png";

const Partners = () => {
  return (
    <Box position="relative" textAlign="center" my={20}>
      <Box color="white">
        <Heading fontSize="2xl">Partners and Sponsors</Heading>
        <Text>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </Text>
      </Box>

      <Image src={lens} zIndex={1} />

      <Image
        src={sponsors}
        zIndex={90}
        position="absolute"
        top={100}
        left={35}
      />
    </Box>
  );
};

export default Partners;
