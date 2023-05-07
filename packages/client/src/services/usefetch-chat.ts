import { ChatData } from 'chat-type';
import { useQuery } from '@tanstack/react-query';
import { fetchClient, Error } from '@/utils';

const queryKey = 'chat';

export const chatFetcher = async () => {
  const { data } = await fetchClient.get<Array<ChatData>>('api/chat');
  return data;
};

export const useFetchChat = () => {
  const result = useQuery<Array<ChatData>, Error['response']>([queryKey], chatFetcher, {
    useErrorBoundary: (error) => (error?.status as number) >= 500,
  });

  return result;
};
