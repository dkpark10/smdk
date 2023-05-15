import { Flex } from '@chakra-ui/react';
import { Styles } from '@/components/common';

export default function Error500() {
  return (
    <Flex align="center" justify="center" h="100vh" gap={2}>
      <Styles.Heart />
      Internal Server Error 500
      <Styles.Heart />
    </Flex>
  );
}
