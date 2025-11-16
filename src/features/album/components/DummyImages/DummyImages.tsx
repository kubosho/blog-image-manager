import { DummyImage } from '../DummyImage';

type Props = {
  count: number;
};

export function DummyImages({ count }: Props): React.JSX.Element {
  return (
    <ul className="columns-4 gap-6">
      {Array.from({ length: count }, (_, index) => (
        <li key={index} className="break-inside-avoid grid grid-flow-row mb-6">
          <DummyImage />
        </li>
      ))}
    </ul>
  );
}
