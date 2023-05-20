import { Flex, Text, Input, Box } from '@chakra-ui/react';
import { Styles } from '@/components/common';
import Dialog from '@/components/dialog/dialog';
import { trpc } from '@/trpc';

const parseDate = (date: string) => date.split(' ').slice(3);

export default function Chat() {
  const { data: chatData, isLoading } = trpc.chat.getChatData.useQuery();

  /** @todo suspense */
  if (isLoading) {
    return <div>로딩..</div>;
  }

  return (
    <Styles.AniBottomToTop>
      <Flex overflow="auto" h="95vh" flexDirection="column-reverse">
        {chatData?.map(({ content, isSender, fullDate, milliSeconds }) => (
          <Flex key={milliSeconds} p={2}>
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
      <Input />
    </Styles.AniBottomToTop>
  );
}
