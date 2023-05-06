import { Center, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { moveTopFromBottom } from '@/animations';

const animation = `${moveTopFromBottom} 0.5s ease-in-out`;

export default function Chat() {
  return (
    <Box h="100vh" position="relative">
      <Box w="100%" h="100%" position="absolute" as={motion.div} animation={animation} top="50%" border="1px solid red">
        <Center border="1px solid blue">여긴 채팅</Center>
      </Box>
    </Box>
  );
}
