import { Badge, Spacer, Container } from '@chakra-ui/react';
import { ChatData } from 'chat-type';

export default function Dialog({ content, isSender = true, fullDate }: Partial<ChatData>) {
  return (
    <>
      {!isSender && <Spacer />}
      <Badge bgColor={isSender ? 'primary' : 'gray.200'} maxW="70vw">
        <Container maxW="md">{content}</Container>
      </Badge>
      {isSender && <Spacer />}
    </>
  );
}
