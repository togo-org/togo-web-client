'use client';

// import useStyles from '@/app/select-event/how-much/_features/Counter/_features/ContinueButton/ContinueButton.useStyles';

import Button from '@/features/shared/Button';
import { useUpdateResults } from '@/utils/hooks';
import { useRouter } from 'next/navigation';
import useStyles from './FineEventButton.useStyles';

const FineEventButton = () => {
  const styles = useStyles();
  const router = useRouter();
  const updateResults = useUpdateResults();

  const handleClick = () => {
    router.push('/results');
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
