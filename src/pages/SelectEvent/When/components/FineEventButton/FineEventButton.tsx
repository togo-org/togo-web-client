import useStyles from '@/pages/SelectEvent/HowMuch/components/ContinueButton/ContinueButton.useStyles';
import Button from '@/shared/Button';
import { useUpdateResults } from '@/utils/hooks';
import { useRouter } from 'next/router';

const FineEventButton = () => {
  const styles = useStyles();
  const router = useRouter();
  const updateResults = useUpdateResults();

  const handleClick = () => {
    router.push('/ResultsPage');
    updateResults();
  };

  return (
    <Button
      label='תמצא לי אירוע'
      shape='pill'
      sx={styles.root}
      onClick={handleClick}
    />
  );
};

export default FineEventButton;
