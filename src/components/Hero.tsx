import { Box, HStack, Text, Image, Heading } from "@chakra-ui/react";
import headerImage from "../assets/images/header image.png";
import headerLine from "../assets/images/header line.png";
import creative from "../assets/images/Creative.png";
import chainBlast from "../assets/images/chain-blast.png";
import star from "../assets/images/star.png";
import { useState } from "react";

const Hero = () => {
  const [timeCounter, setTimeCounter] = useState("");

  setInterval(() => {
    const countDown = new Date();
    const hours = countDown.getHours();
    const minutes = countDown.getMinutes();
    const seconds = countDown.getSeconds();

    const timer = `${hours}:${minutes}:${seconds}`;
    setTimeCounter(timer);
  }, 1000);

  return (
    <Box>
      <Box position="relative">
        <Image src={star} position="absolute" top={50} left={200} />
        <Text
          color="white"
          fontWeight="bold"
          fontSize="2xl"
          position="absolute"
          top={5}
          right={10}
        >
          Igniting a Revelation in HR Innovation
        </Text>
        <Image src={headerLine} position="absolute" top={14} right={10} />
      </Box>

      <HStack>
        <Box ml={100} position="relative">
          <Image src={creative} position="absolute" top={-18} right={240} />
          <Image src={chainBlast} position="absolute" top={100} right={70} />
          <Heading color="white" fontSize="6xl" fontWeight="bold">
            getlinked Tech Hackathon <span className="version">1.0</span>
          </Heading>
          <Text color="white" w="60%">
            Participate in getlinked tech Hackaton 2023 stand a chance to win a
            Big prize
          </Text>
          <button className="register-btn2">Register</button>
          <HStack color="white" fontSize="2xl" mt={10}>
            <Text fontSize="5xl">{timeCounter}</Text>
          </HStack>
        </Box>
        <Image src={headerImage} mt={20} />
      </HStack>
    </Box>
  );
};

export default Hero;
