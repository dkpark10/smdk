import { Flex, Text, Input } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { ChatData } from 'chat-type';
import { Styles } from '@/components/common';
import Dialog from '@/components/dialog/dialog';
import { trpc } from '@/trpc';

const socket = io('http://localhost:8080');

const parseDate = (date: string) => date.split(' ').slice(3);

const CHAT_SOCKET_HANDLER = 'message';
const CHAT_SOCKET_JOIN_ROOM = 'join-room';

export default function Chat() {
  const { data: chatServerData, isLoading } = trpc.chat.getChatData.useQuery(undefined, {
    staleTime: Infinity,
  });

  const [showChatData, setShowChatData] = useState<ChatData[]>([]);

  const chatInputElement = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setShowChatData(chatServerData || []);
    const chatHandler = (newChatData: ChatData) => {
      setShowChatData((prev) => [...prev, newChatData]);
    };

    const sendChatData = (e: KeyboardEvent) => {
      if (e.key !== 'Enter' || !chatInputElement.current || chatInputElement.current?.value === '') {
        return;
      }

      socket.emit(CHAT_SOCKET_HANDLER, chatInputElement.current.value, chatHandler);
      chatInputElement.current.value = '';
    };

    socket.on(CHAT_SOCKET_HANDLER, chatHandler);
    window.addEventListener('keydown', sendChatData);
    return () => {
      socket.off(CHAT_SOCKET_HANDLER, chatHandler);
      window.removeEventListener('keydown', sendChatData);
    };
  }, [chatServerData]);

  useEffect(() => {
    socket.emit(CHAT_SOCKET_JOIN_ROOM);
  }, []);

  /** @todo suspense */
  if (isLoading) {
    return <div>로딩..</div>;
  }

  return (
    <Styles.AniBottomToTop>
      <Flex overflow="auto" h="95vh" flexDirection="column-reverse">
        {showChatData?.reverse().map(({ content, isSender, fullDate, milliSeconds }) => (
          <Flex key={content} p={2}>
            <Dialog
              key={milliSeconds}
              content={content}
              isSender={isSender}
              fullDate={fullDate}
              dateComponent={
                <Text fontSize="xs" color="gray.400">
                  {parseDate(fullDate)}
                </Text>
              }
            />
          </Flex>
        ))}
      </Flex>
      <Flex h="5vh" bgColor="gray.700" px={3} py={1.5}>
        <Input
          ref={chatInputElement}
          color="white"
          px={3}
          variant="unstyled"
          bgColor="gray.800"
          borderRadius="xl"
          fontSize="sm"
        />
      </Flex>
    </Styles.AniBottomToTop>
  );
}
