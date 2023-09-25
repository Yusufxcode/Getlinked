import { Box, Flex, HStack, Heading, Image, Text } from "@chakra-ui/react";
import star from "../assets/images/star.png";
import PStar from "../assets/images/star pu.png";
import instaIcon from "../assets/images/instagramIcon.png";
import XIcon from "../assets/images/xIcon.png";
import facebookIcon from "../assets/images/facebookIcon.png";
import linkedinIcon from "../assets/images/linkedinIcon.png";
import phoneIcon from "../assets/images/phoneIcon.png";
import locationIcon from "../assets/images/locationIcon.png";

const Footer = () => {
  return (
    <>
      <HStack color="white" fontSize="small" mx={50} my={10} gap="8rem">
        <Image src={star} />

        <Box>
          <Heading fontSize="36" color="white">
            get<span className="linked">linked</span>
          </Heading>
          <Text w="80" my={5} lineHeight={6}>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </Text>
          <Text my={50}>Terms of use | Privacy Policy</Text>
        </Box>

        <Flex flexDirection="column" gap={3}>
          <Text color="#D434FE" fontWeight="bold">
            Useful Links
          </Text>
          <Text>Overview</Text>
          <Text>Timeline</Text>
          <Text>FAQs</Text>
          <Text>Register</Text>
          <HStack>
            <Text color="#D434FE">Follow us</Text>
            <Image src={instaIcon} />
            <Image src={XIcon} />
            <Image src={facebookIcon} />
            <Image src={linkedinIcon} />
          </HStack>
        </Flex>

        <Box>
          <Text color="#D434FE" fontWeight="bold">
            Contact Us
          </Text>
          <HStack my={5}>
            <Image src={phoneIcon} />
            <Text>+234 679 81819</Text>
          </HStack>
          <HStack>
            <Image src={locationIcon} />
            <Text>27,Alara Street Yaba 100012 Lagos State</Text>
          </HStack>
        </Box>

        <Image src={star} mt={40} />
      </HStack>

      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={10}
        mb={20}
      >
        <Image src={PStar} />
        <Text color="white">All rights reserved. © getlinked Ltd.</Text>
      </Flex>
    </>
  );
};

export default Footer;
