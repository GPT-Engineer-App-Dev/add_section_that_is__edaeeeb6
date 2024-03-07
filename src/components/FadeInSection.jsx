import { Box, useBoolean } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const FadeInSection = () => {
  const [isVisible, setIsVisible] = useBoolean();
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible.toggle(entry.isIntersecting));
    });
    const { current } = domRef;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, [setIsVisible]);

  return (
    <Box ref={domRef} opacity={isVisible ? 1 : 0} transform={isVisible ? "translateY(0)" : "translateY(20px)"} transition="opacity 0.6s ease-out, transform 0.6s ease-out" visibility={isVisible ? "visible" : "hidden"} p={4}>
      <Box as="p" color="white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Box>
      <Box as="p" color="white" mt={4}>
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Box>
    </Box>
  );
};

export default FadeInSection;
