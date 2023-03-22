import { useQuery, QueryOptions } from "@tanstack/react-query";
import { fetchClient } from "../utils/fetchclient";

const title = '123123';

export const useFetchQuery = async <T>(queryKey: string[], url: string, queryOptions?: QueryOptions) => {
  return useQuery(queryKey, () => fetchClient.get<T>(url), queryOptions);
}