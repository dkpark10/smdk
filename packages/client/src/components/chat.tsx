/* eslint-disable react/no-array-index-key */
import { Flex } from '@chakra-ui/react';
import { useFetchChat } from '@/services/usefetch-chat';
import { Styles } from '@/components/common';
import Dialog from '@/components/dialog/dialog';

export default function Chat() {
  const { data: chatData, isLoading } = useFetchChat();

  /** @todo suspense */
  if (isLoading) {
    return <div>로딩..</div>;
  }

  return (
    <Styles.AniBottomToTop>
      {chatData?.map(({ content, isSender, fullDate, milliSeconds }) => (
        <Flex key={milliSeconds} p={1.5}>
          <Dialog key={`${content}`} content={content} isSender={isSender} fullDate={fullDate} />
        </Flex>
      ))}
    </Styles.AniBottomToTop>
  );
}
