type Props = {
  isFetching: boolean;
  fetchedImagesCount: number;
};

export function ImagesLoadingAnnouncer({ isFetching, fetchedImagesCount }: Props): React.JSX.Element {
  return (
    <p className="sr-only" aria-live="polite">
      {isFetching ? 'Loading images...' : `${fetchedImagesCount} images loaded.`}
    </p>
  );
}
