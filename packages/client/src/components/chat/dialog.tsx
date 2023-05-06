import { Badge } from '@chakra-ui/react';
import { ChatData } from 'chat-type';

export default function Dialog({ content, isSender, fullDate }: ChatData) {
  return (
    <Badge>
      {content} {fullDate}
    </Badge>
  );
}
