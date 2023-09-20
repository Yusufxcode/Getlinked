import { Box, HStack, Text } from "@chakra-ui/react";

const Timeline = () => {
  return (
    <>
      <Box my={10}>
        <Box textAlign="center" color="white" mb={20}>
          <Text fontSize="3xl" fontWeight="bold">
            Timeline
          </Text>
          <Text>
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </Text>
        </Box>

        <HStack gap={20} ml={120}>
          <Box w="40%" textAlign="right">
            <Text color="#D434FE" fontWeight="bold" fontSize="1xl">
              Hackathon Announcement
            </Text>
            <Text color="white">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </Text>
          </Box>

          <Box>
            <Box className="timelines"></Box>
            <Box className="number" mt={2}>
              1
            </Box>
          </Box>

          <Text color="#D434FE" fontWeight="bold" fontSize="1xl" mt={58}>
            November 18, 2023
          </Text>
        </HStack>

        <HStack gap={20} ml={325} display="flex" justifyContent={"center"}>
          <Text color="#D434FE" fontWeight="bold" fontSize="1xl" mt={58}>
            November 18, 2023
          </Text>

          <Box>
            <Box className="timelines"></Box>
            <Box className="number" my={2}>
              2
            </Box>
          </Box>

          <Box w="40%" textAlign="left" mt={10}>
            <Text color="#D434FE" fontWeight="bold" fontSize="1xl">
              Teams Registration begins
            </Text>
            <Text color="white">
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </Text>
          </Box>
        </HStack>

        <HStack gap={20} ml={120}>
          <Box w="40%" textAlign="right" mt={5}>
            <Text color="#D434FE" fontWeight="bold" fontSize="1xl">
              Teams Registration ends
            </Text>
            <Text color="white">
              Interested Participants are no longer Allowed to register
            </Text>
          </Box>

          <Box>
            <Box className="timelines"></Box>
            <Box className="number" mt={2}>
              3
            </Box>
          </Box>

          <Text color="#D434FE" fontWeight="bold" fontSize="1xl" mt={58}>
            November 18, 2023
          </Text>
        </HStack>

        <HStack gap={20} ml={325} display="flex" justifyContent={"center"}>
          <Text color="#D434FE" fontWeight="bold" fontSize="1xl" mt={58}>
            November 18, 2023
          </Text>

          <Box>
            <Box className="timelines"></Box>
            <Box className="number" my={2}>
              4
            </Box>
          </Box>

          <Box w="40%" textAlign="left" mt={10}>
            <Text color="#D434FE" fontWeight="bold" fontSize="1xl">
              Announcement of the accepted teams and ideas
            </Text>
            <Text color="white">
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </Text>
          </Box>
        </HStack>

        <HStack gap={20} ml={120}>
          <Box w="40%" textAlign="right" mt={5}>
            <Text color="#D434FE" fontWeight="bold" fontSize="1xl">
              Getlinked Hackathon 1.0 Offically Begins
            </Text>
            <Text color="white">
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </Text>
          </Box>

          <Box>
            <Box className="timelines"></Box>
            <Box className="number" mt={2}>
              5
            </Box>
          </Box>

          <Text color="#D434FE" fontWeight="bold" fontSize="1xl" mt={58}>
            November 18, 2023
          </Text>
        </HStack>

        <HStack gap={20} ml={325} display="flex" justifyContent={"center"}>
          <Text color="#D434FE" fontWeight="bold" fontSize="1xl" mt={58}>
            November 18, 2023
          </Text>

          <Box>
            <Box className="timelines"></Box>
            <Box className="number" my={2}>
              6
            </Box>
          </Box>

          <Box w="40%" textAlign="left" mt={10}>
            <Text color="#D434FE" fontWeight="bold" fontSize="1xl">
              Demo Day
            </Text>
            <Text color="white">
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </Text>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Timeline;
