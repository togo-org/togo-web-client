import Button from '@/shared/Button';
import { useUpdateResults } from '@/utils/hooks';

const RefreshButton = () => {
  const updateResults = useUpdateResults();
  return (
    <Button
      label='רענן תוצאות'
      onClick={updateResults}
      variant='text'
      color='primary'
    />
  );
};

export default RefreshButton;
