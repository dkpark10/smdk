import { Badge } from '@chakra-ui/react';

interface DialogProps {
  content: string;
  isSender: boolean;
  date: string;
}

export default function Dialog({ content, isSender, date }: DialogProps) {
  return (
    <Badge>
      {content} {date}
    </Badge>
  );
}
