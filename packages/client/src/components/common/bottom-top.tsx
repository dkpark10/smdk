import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { moveTopFromBottom } from '@/animations';

interface BottomToTopProps {
  children: ReactNode;
}

const animation = `${moveTopFromBottom} 0.3s ease-in-out`;

export default function BottomToTop({ children }: BottomToTopProps) {
  return (
    <Box h="100vh" position="relative" bgColor="gray.200">
      <Box w="100%" h="100%" position="absolute" as={motion.div} animation={animation} top="0%" bgColor="white">
        {children}
      </Box>
    </Box>
  );
}
