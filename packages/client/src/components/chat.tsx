import { Center } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { Styles } from '@/components/common';
import { fetchClient } from '@/utils';

export default function Chat() {
  const { data } = useQuery(['chat'], () => fetchClient.get('/api/chat'));
  console.log(data);

  return (
    <Styles.AniBottomToTop>
      <Center border="1px solid blue">여긴 채팅</Center>
    </Styles.AniBottomToTop>
  );
}
