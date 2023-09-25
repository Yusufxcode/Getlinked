import {
  Box,
  HStack,
  Text,
  Image,
  Input,
  Textarea,
  Flex,
  VStack,
} from "@chakra-ui/react";
import instaIcon from "../assets/images/instagramIcon.png";
import XIcon from "../assets/images/xIcon.png";
import facebookIcon from "../assets/images/facebookIcon.png";
import linkedinIcon from "../assets/images/linkedinIcon.png";
import background from "../assets/images/contactBackground.png";

const Contact = () => {
  return (
    <Flex justifyContent="center" alignItems="center" gap="15rem">
      <Flex flexDirection="column" gap={5} color="white" fontSize="small">
        <Text color="#D434FE" fontWeight="bold" fontSize="md">
          Get in touch
        </Text>
        <Box>
          <Text>Contact</Text>
          <Text>Information</Text>
        </Box>
        <Box>
          <Text>27, Alara Street</Text>
          <Text>Yaba 100012</Text>
          <Text>Lagos State</Text>
        </Box>
        <Text>Call Us: 070067981819</Text>
        <Box>
          <Text>we are open from Monday-Friday</Text>
          <Text>08:00am - 05:00pm</Text>
        </Box>
        <Box>
          <Text color="#D434FE">Share on</Text>
          <HStack>
            <Image src={instaIcon} />
            <Image src={XIcon} />
            <Image src={facebookIcon} />
            <Image src={linkedinIcon} />
          </HStack>
        </Box>
      </Flex>

      <Box position="relative">
        <Image src={background} zIndex={1} />
        <Box position="absolute" top={10} right={20}>
          <Box color="#D434FE" mb={5}>
            <Text>Questions or need assistance?</Text>
            <Text>let us know about it!</Text>
          </Box>

          <Box>
            <VStack w={80} gap={7} color={"white"}>
              <Input placeholder="First Name" borderRadius={3} />
              <Input placeholder="Mail" borderRadius={3} />
              <Textarea placeholder="Message" borderRadius={3} />
              <button className="read-more-btn">Submit</button>
            </VStack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
export default Contact;
