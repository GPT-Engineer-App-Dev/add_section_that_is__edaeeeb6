import { Box, Center, Text, VStack, keyframes, css } from "@chakra-ui/react";
import FadeInSection from "../components/FadeInSection";
import { FaHeart } from "react-icons/fa";

// Define keyframes for the falling hearts
const fall = keyframes`
  0% { transform: translateY(-100%); opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
`;

// Generate multiple animations with different delays for a more natural look
// Removed the generateAnimations function since it's no longer used

import styled from "@emotion/styled";

// Create a styled component for the falling hearts
// Apply the animations directly within the FallingHeart component using the css prop
const FallingHeart = styled(FaHeart)(() => ({
  position: "fixed",
  color: "white",
  fontSize: `${Math.random() * 1 + 0.5}rem`, // Make them smaller
  animation: `${fall} ${4 + Math.random() * 6}s linear ${Math.random() * 5}s infinite`,
  left: `${Math.random() * 100}vw`,
}));

const Index = () => {
  return (
    <Box position="relative" h="100vh" overflow="hidden" bg="black">
      <Center position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
        <Text fontFamily="monospace" fontSize="6xl" color="white">
          Lovable
        </Text>
      </Center>
      {Array.from({ length: 50 }).map((_, index) => (
        <FallingHeart key={index} />
      ))}
      <FadeInSection />
      <FadeInSection />
    </Box>
  );
};

export default Index;
