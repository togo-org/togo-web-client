'use client';

import Button from '@/features/shared/Button';
import { currentSelectEventTabState } from '@/store';
import { useSetRecoilState } from 'recoil';
import useStyles from './ContinueButton.useStyles';
import { useRouter } from 'next/navigation';

const ContinueButton = () => {
  const setSelectedTab = useSetRecoilState(currentSelectEventTabState);
  const router = useRouter();
  const styles = useStyles();
  const handleClick = () => {
    setSelectedTab('when');
    router.push('/select-event/when');
  };
  return (
    <Button label='המשך' shape='pill' sx={styles.root} onClick={handleClick} />
  );
};

export default ContinueButton;
