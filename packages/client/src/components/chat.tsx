/* eslint-disable react/no-array-index-key */
import { useFetchChat } from '@/services/usefetch-chat';
import { Styles } from '@/components/common';
import Dialog from '@/components/chat/dialog';

export default function Chat() {
  const { data: chatData } = useFetchChat();

  return (
    <Styles.AniBottomToTop>
      {chatData?.map(({ content, isSender, fullDate }, idx) => (
        <Dialog key={`${content}-${idx}`} content={content} isSender={isSender} fullDate={fullDate} />
      ))}
      <h2>222</h2>
    </Styles.AniBottomToTop>
  );
}
