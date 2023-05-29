import { Spacer, Container, Flex } from '@chakra-ui/react';
import { ChatData } from 'chat-type';

interface DialogProps extends Partial<ChatData> {
  dateComponent: JSX.Element | JSX.Element[];
}

export default function Dialog({ content, isSender = true, dateComponent }: DialogProps) {
  return (
    <>
      {!isSender && <Spacer />}
      <Flex align="flex-start" gap={1}>
        {!isSender && dateComponent}
        <Container
          transform="rotate(180deg)"
          borderRadius="md"
          maxW="70vw"
          fontSize="0.9rem"
          bgColor={isSender ? 'primary' : 'gray.200'}
          color={isSender ? 'white' : 'fontColor'}
          wordBreak="break-all"
          px={1.5}
        >
          {content}
        </Container>
        {isSender && dateComponent}
      </Flex>
      {isSender && <Spacer />}
    </>
  );
}
