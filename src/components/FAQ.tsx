import { Box, HStack, Text, Image, VStack, Heading } from "@chakra-ui/react";
import thought from "../assets/images/thoughts.png";
import starPurple from "../assets/images/star pu.png";

const FAQ = () => {
  return (
    <HStack my={30} mx={20}>
      <Box>
        <Box ml={20}>
          <Image src={starPurple} mb={8} />
          <Heading color="white" fontSize="2xl" fontWeight="bold">
            Frequently Ask
          </Heading>
          <Heading color="#D434FE" fontSize="2xl" fontWeight="bold">
            Questions
          </Heading>
          <Text color="whiteAlpha.500">
            We got answers to the questions that you might want to ask about{" "}
            <span className="faq-snippet">getlinked Hackathon 1.0</span>
          </Text>
        </Box>

        <VStack mt={20} gap={7}>
          <HStack
            display="flex"
            gap={16}
            borderBottom="1px"
            borderColor="#D434FE"
            width={"75%"}
          >
            <Text color="white">
              Can I work on a project I started before the hackathon?
            </Text>
            <Text color="#D434FE" fontSize="2xl">
              +
            </Text>
          </HStack>

          <HStack
            display="flex"
            gap={40}
            borderBottom="1px"
            borderColor="#D434FE"
            width={"75%"}
          >
            <Text color="white">
              What happens if I need help during the hackathon?
            </Text>
            <Text color="#D434FE" fontSize="2xl">
              +
            </Text>
          </HStack>

          <HStack
            display="flex"
            gap={40}
            borderBottom="1px"
            borderColor="#D434FE"
            width={"75%"}
          >
            <Text color="white">
              What happens if I don't have an idea for a project?
            </Text>
            <Text color="#D434FE" fontSize="2xl">
              +
            </Text>
          </HStack>

          <HStack
            display="flex"
            gap={40}
            borderBottom="1px"
            borderColor="#D434FE"
            width={"75%"}
          >
            <Text color="white">
              Can I join a team or do I have to come with one?
            </Text>
            <Text color="#D434FE" fontSize="2xl">
              +
            </Text>
          </HStack>
          <HStack
            display="flex"
            gap={60}
            borderBottom="1px"
            borderColor="#D434FE"
            width={"75%"}
          >
            <Text color="white">What happens after the hackathon ends</Text>
            <Text color="#D434FE" fontSize="2xl">
              +
            </Text>
          </HStack>
        </VStack>
      </Box>

      <Box>
        <Image src={thought} />
      </Box>
    </HStack>
  );
};

export default FAQ;
