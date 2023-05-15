import { ChatData } from 'chat-type';
import { useQuery } from '@tanstack/react-query';
import { fetchClient, Error } from '@/utils';

const queryKey = 'chat';

interface ChatResponseData {
  chatData: Array<ChatData>;
}

export const chatFetcher = async () => {
  const { data } = await fetchClient.get<ChatResponseData>('api/chat');
  return data.chatData;
};

export const useFetchChat = () => {
  const result = useQuery<Array<ChatData>, Error['response']>([queryKey], chatFetcher, {
    useErrorBoundary: (error) => (error?.status as number) >= 500,
  });

  return result;
};
