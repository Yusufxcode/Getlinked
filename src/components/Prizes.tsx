import { Box, HStack, Image, Text } from "@chakra-ui/react";
import purpleFlare from "../assets/images/Purple-Lens-Flare-PNG.png";
import trophy from "../assets/images/trophy.png";
import purpleStar from "../assets/images/star pu.png";
import silverMedal from "../assets/images/silver_medal.png";

const Prizes = () => {
  return (
    <HStack>
      <Box position="relative">
        <Image src={purpleStar} position="absolute" top={20} left={200} />
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
        <Text color="white" fontSize="2xl" fontWeight="bold">
          Prizes and
        </Text>
        <Text color="#D434FE" fontSize="2xl" fontWeight="bold">
          Rewards
        </Text>
        <Text color="white">
          Highlight of the prizes or rewards for winners and for participants.
        </Text>

        <HStack>
          <Box className="silver-medal">
            <Image src={silverMedal} />
          </Box>
        </HStack>
      </Box>
    </HStack>
  );
};

export default Prizes;
