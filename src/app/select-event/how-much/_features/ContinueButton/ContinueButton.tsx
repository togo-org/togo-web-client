'use client';

import Button from '@/features/shared/Button';
import { currentSelectEventTabState } from '@/store';
import { useSetRecoilState } from 'recoil';
import useStyles from './ContinueButton.useStyles';

const ContinueButton = () => {
  const setSelectedTab = useSetRecoilState(currentSelectEventTabState);
  const styles = useStyles();
  const handleClick = () => {
    setSelectedTab(2);
  };
  return (
    <Button label='המשך' shape='pill' sx={styles.root} onClick={handleClick} />
  );
};

export default ContinueButton;
