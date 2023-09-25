import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import purpleFlare from "../assets/images/Purple-Lens-Flare-PNG.png";
import trophy from "../assets/images/trophy.png";
import purpleStar from "../assets/images/star pu.png";
import silverMedal from "../assets/images/silver_medal.png";
import bronzeMedal from "../assets/images/bronze_medal.png";
import goldMedal from "../assets/images/gold_medal.png";
import medalBackground from "../assets/images/medal-background 1.png";
import medalBackground2 from "../assets/images/medal-background 2.png";

const Prizes = () => {
  return (
    <HStack>
      <Box position="relative">
        <Image
          src={purpleStar}
          position="absolute"
          top={20}
          left={200}
          border="1px"
        />
        <Image src={purpleFlare} zIndex={1} />
        <Image
          src={trophy}
          zIndex={90}
          position="absolute"
          top={40}
          left={20}
        />
      </Box>

      <Box>
        <Box mb={150}>
          <Heading color="white" fontSize="2xl" fontWeight="bold">
            Prizes and
          </Heading>
          <Heading color="#D434FE" fontSize="2xl" fontWeight="bold">
            Rewards
          </Heading>
          <Text color="white" width="60%">
            Highlight of the prizes or rewards for winners and for participants.
          </Text>
        </Box>

        <HStack spacing={5}>
          <Box className="silver-medal" position="relative">
            <Image
              src={silverMedal}
              zIndex={90}
              position="absolute"
              top={-70}
              left={0}
            />
            <Image src={medalBackground} zIndex={5} />
            <Box
              textAlign="center"
              color="white"
              position="absolute"
              top={20}
              left={3}
            >
              <Text fontSize="2xl" fontWeight="bold">
                2nd
              </Text>
              <Text fontSize="2xl">Runner</Text>
              <Text fontSize="2xl" fontWeight="bold" color="#D434FE">
                N300,000
              </Text>
            </Box>
          </Box>

          <Box className="gold-medal" position="relative">
            <Image
              src={goldMedal}
              zIndex={90}
              position="absolute"
              top={-90}
              left={0}
            />
            <Image src={medalBackground2} zIndex={5} />
            <Box
              textAlign="center"
              color="white"
              position="absolute"
              top={20}
              left={3.5}
            >
              <Text fontSize="2xl" fontWeight="bold">
                1st
              </Text>
              <Text fontSize="2xl">Runner</Text>
              <Text fontSize="2xl" fontWeight="bold" color="#D434FE">
                N500,000
              </Text>
            </Box>
          </Box>

          <Box className="bronze-medal" position="relative">
            <Image
              src={bronzeMedal}
              zIndex={90}
              position="absolute"
              top={-70}
              left={0}
            />
            <Image src={medalBackground} zIndex={5} />
            <Box
              textAlign="center"
              color="white"
              position="absolute"
              top={20}
              left={4}
            >
              <Text fontSize="2xl" fontWeight="bold">
                3nd
              </Text>
              <Text fontSize="2xl">Runner</Text>
              <Text fontSize="2xl" fontWeight="bold" color="#D434FE">
                N150,000
              </Text>
            </Box>
          </Box>
        </HStack>
      </Box>
    </HStack>
  );
};

export default Prizes;
