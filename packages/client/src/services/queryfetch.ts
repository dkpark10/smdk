import { useQuery, QueryOptions, QueryKey } from '@tanstack/react-query';
import { fetchClient } from '../utils/fetchclient';

export const useFetchQuery = async <T>(queryKey: QueryKey, url: string, queryOptions?: QueryOptions) => {
  return Promise.resolve(useQuery(queryKey, () => fetchClient.get<T>(url), queryOptions));
};
