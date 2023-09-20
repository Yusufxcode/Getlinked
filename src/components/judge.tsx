import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import judges from "../assets/images/judges.png";

const judge = () => {
  return (
    <HStack mx={55} mb={20}>
      <Box>
        <Image src={judges} />
      </Box>

      <Box w="40%">
        <Box mb={5}>
          <Heading color="white" fontSize="2xl" fontWeight="bold">
            Judging Criteria
          </Heading>
          <Heading color="#D434FE" fontSize="2xl" fontWeight="bold">
            Key Attributes
          </Heading>
        </Box>

        <VStack gap={5}>
          <Text color="white">
            <span className="judge-text">Innovation and Creativity: </span>
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </Text>
          <Text color="white">
            <span className="judge-text">Functionality: </span>
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </Text>
          <Text color="white">
            <span className="judge-text">Impact and Relevance: </span>
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </Text>
          <Text color="white">
            <span className="judge-text">Technical Complexity: </span>
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </Text>
          <Text color="white">
            <span className="judge-text">Adhenrence to Hackathon Rules: </span>:
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </Text>
        </VStack>
        <button className="read-more-btn">Read More</button>
      </Box>
    </HStack>
  );
};

export default judge;
