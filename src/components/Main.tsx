import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import bigIdea from "../assets/images/The big idea.png";
import curlyArrow from "../assets/images/curly arrow.png";
import bossLady from "../assets/images/boss lady.png";
import star from "../assets/images/star.png";

const Main = () => {
  return (
    <>
      <HStack m={20} gap="13rem">
        <Box ml={10} width="100%" position="relative">
          <Image src={bigIdea} />
          <Image src={curlyArrow} position="absolute" bottom={-5} right={-10} />
        </Box>

        <Box>
          <Heading color="white" fontSize="2xl" fontWeight="bold">
            Introduction to getlinked
          </Heading>
          <Heading color="#D434FE" fontSize="2xl" fontWeight="bold">
            tech Hackathon 1.0
          </Heading>
          <Text color="whiteAlpha.500" mt={5} w="90%">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </Text>
        </Box>
      </HStack>

      <HStack m={20} gap="10rem">
        <Box ml={10} position="relative">
          <Heading color="white" fontSize="2xl" fontWeight="bold">
            Rules and
          </Heading>
          <Heading color="#D434FE" fontSize="2xl" fontWeight="bold">
            Guidelines
          </Heading>
          <Text color="whiteAlpha.500" mt={5} w="90%">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </Text>
          <Image src={star} position="absolute" bottom={-10} right={0} />
        </Box>
        <Box mr={10} width="150%">
          <Image src={bossLady} />
        </Box>
      </HStack>
    </>
  );
};

export default Main;
