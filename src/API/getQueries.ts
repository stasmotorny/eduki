import {useInfiniteQuery} from 'react-query';
import {Data, Resp} from '../types/materialType.ts';
// @ts-ignore
import {API_URL, API_TOKEN} from '@env';

const limit = 20;
const world = 'de';

export const useEduki2 = (searchValue: string) => {
  const getItems = async ({pageParam = 1}) => {
    const response = await fetch(
      searchValue && searchValue.length
        ? `${API_URL}?limit=${limit}&p=${pageParam}&world=${world}&q=${searchValue}`
        : `${API_URL}?limit=${limit}&p=${pageParam}&world=${world}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      },
    );
    const data: Resp = await response.json();
    return {data: {...data.data}, nextPage: pageParam + 1};
  };

  return useInfiniteQuery<{data: Data; nextPage: number}>(['items'], getItems, {
    getNextPageParam: lastPage => {
      if (lastPage.data?.items?.materials.length < 20) {
        return undefined;
      }
      return lastPage.nextPage;
    },
  });
};
