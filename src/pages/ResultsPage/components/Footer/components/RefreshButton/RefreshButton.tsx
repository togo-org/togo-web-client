import Button from '@/shared/Button';

interface RefreshButtonProps {
  onClick: () => void;
}

const RefreshButton = ({ onClick }: RefreshButtonProps) => {
  return (
    <Button
      label='רענן תוצאות'
      onClick={onClick}
      variant='text'
      color='primary'
    />
  );
};

export default RefreshButton;
