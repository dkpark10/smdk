import { ChatData } from 'chat-type';
import { useQuery } from '@tanstack/react-query';
import { fetchClient } from '@/utils';

const queryKey = 'chat';

export const chatFetcher = async () => {
  const { data } = await fetchClient.get<Array<ChatData>>('api/chat');
  return data;
};

export const useFetchChat = () => {
  const result = useQuery<Array<ChatData>>([queryKey], chatFetcher, {
    useErrorBoundary: (error: any) => {
      console.log("123", error);
      return error.status >= 500;
    },
  });
  return result;
};
