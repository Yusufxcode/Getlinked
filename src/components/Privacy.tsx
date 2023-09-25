import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import privacy from "../assets/images/Privacy.png";
import privacyBoard from "../assets/images/privacy board.png";
import markIcon from "../assets/images/mark icon.png";

const Privacy = () => {
  return (
    <HStack>
      <Box color="white" mx={100} position="relative">
        <Heading fontSize="2xl">Privacy Policy and</Heading>
        <Heading fontSize="2xl" color="#D434FE">
          Terms
        </Heading>
        <Text fontSize="small" my={5}>
          last updated on september 12, 2023
        </Text>
        <Text w="60%" fontSize="small" mb={10}>
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </Text>
        <Image src={privacyBoard} zIndex={1} />

        <Box
          w="60%"
          fontSize="small"
          zIndex={10}
          position={"absolute"}
          top={230}
          left={10}
        >
          <Text mb={5} lineHeight="6">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </Text>
          <Text color="#D434FE" fontSize="bold">
            Licensing Policy
          </Text>
          <Text mb={5}>Here are terms of our Standard License:</Text>
          <HStack>
            <Image src={markIcon} />
            <Text mb={3}>
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </Text>
          </HStack>
          <HStack>
            <Image src={markIcon} />
            <Text>
              You are licensed to use the item available at any free source
              sites, for your project developement
            </Text>
          </HStack>
          <button className="read-more-btn">Read More</button>
        </Box>
      </Box>
      <Box>
        <Image src={privacy} mr={50} />
      </Box>
    </HStack>
  );
};

export default Privacy;
