'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { SESSION_EXPIRED_TIME_IN_SECONDS } from '../../features/auth/session-expired-time';
import { Image } from '../Image';

type Props = {
  imageUrls: string[];
  nextToken: string | null;
};

export function Images({ imageUrls, nextToken }: Props): React.JSX.Element {
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['images'],
    queryFn: async ({ pageParam }) => {
      const params = new URLSearchParams({
        limit: '20',
        expiresIn: SESSION_EXPIRED_TIME_IN_SECONDS.toString(),
      });

      if (pageParam?.nextToken != null && pageParam.nextToken !== '') {
        params.set('nextToken', pageParam.nextToken);
      }

      const response = await fetch(`/api/images?${params.toString()}`);
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }

      const data = await response.json();

      return {
        urls: data.urls,
        nextToken: data.nextToken,
      };
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage.nextToken) {
        return null;
      }

      return { nextToken: lastPage.nextToken };
    },
    initialData: {
      pages: [{ urls: imageUrls, nextToken: nextToken }],
      pageParams: [{ nextToken: null }],
    },
    initialPageParam: { nextToken: null } as { nextToken: string | null },
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000,
  });

  const allImageUrls = data?.pages.flatMap((page) => page.urls) ?? imageUrls;
  const imageData = allImageUrls.map((imageUrl) => {
    const url = new URL(imageUrl);
    const name = url.pathname.slice(1);

    return {
      name: decodeURI(name),
      url: imageUrl,
    };
  });

  return (
    <>
      <ul className="grid grid-cols-4 gap-6">
        {imageData.map(({ name, url }, index) => (
          <li key={index}>
            <Image imageName={name} imageUrl={url} />
          </li>
        ))}
      </ul>
      {hasNextPage && (
        <button onClick={() => fetchNextPage()} disabled={isFetching}>
          {isFetching ? 'Loading...' : 'Load more'}
        </button>
      )}
    </>
  );
}
