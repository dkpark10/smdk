import { Flex, Text, Input } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Styles } from '@/components/common';
import Dialog from '@/components/dialog/dialog';
import { trpc } from '@/trpc';

const parseDate = (date: string) => date.split(' ').slice(3);

export default function Chat() {
  const { data: chatData, isLoading } = trpc.chat.getChatData.useQuery();

  // useEffect(() => {
  //   const socket = new WebSocket(process.env.NEXT_PUBLIC_SOCKET_SERVER);
  //   socket.onopen = () => {
  //     console.log('Connected');
  //     socket.send(
  //       JSON.stringify({
  //         event: 'events',
  //         data: 'test123',
  //       }),
  //     );
  //     socket.onmessage = (data) => {
  //       console.log(data);
  //     };
  //   };
  // }, []);

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
        <Input color="white" variant="unstyled" bgColor="gray.800" borderRadius="xl" />
      </Flex>
    </Styles.AniBottomToTop>
  );
}
