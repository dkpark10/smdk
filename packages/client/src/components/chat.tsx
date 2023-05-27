import { Flex, Text, Input } from '@chakra-ui/react';
import { useCallback, useEffect, useRef } from 'react';
import { Styles } from '@/components/common';
import Dialog from '@/components/dialog/dialog';
import { trpc } from '@/trpc';

const parseDate = (date: string) => date.split(' ').slice(3);

export default function Chat() {
  const { data: chatData, isLoading, refetch } = trpc.chat.getChatData.useQuery();

  const mutation = trpc.chat.createChatData.useMutation({
    onSuccess: () => refetch(),
  });

  const chatInputElement = useRef<HTMLInputElement | null>(null);

  const socket = useRef<WebSocket>();

  useEffect(() => {
    socket.current = new WebSocket(process.env.NEXT_PUBLIC_SOCKET_SERVER);

    socket.current.onopen = () => {
      console.log('Connected');
    };

    socket.current.onmessage = (data) => {
      console.log(data);
    };

    const sendChatData = (e: KeyboardEvent) => {
      if (e.key !== 'Enter' || !chatInputElement.current || chatInputElement.current?.value === '') {
        return;
      }

      // mutation.mutate(chatInputElement.current.value);
      socket.current?.send(
        JSON.stringify({
          event: 'events',
          data: chatInputElement.current?.value,
        }),
      );

      refetch().catch(console.error);

      chatInputElement.current.value = '';
    };

    window.addEventListener('keydown', sendChatData);
    return () => window.removeEventListener('keydown', sendChatData);
  }, [mutation, refetch]);

  /** @todo suspense */
  if (isLoading) {
    return <div>로딩..</div>;
  }

  return (
    <Styles.AniBottomToTop>
      <Flex overflow="auto" h="95vh" flexDirection="column-reverse">
        {chatData?.map(({ content, isSender, fullDate, milliSeconds }) => (
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
