'use client';

import Button from '@/features/shared/Button';
import { currentSelectEventTabState } from '@/store';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import useStyles from './ContinueButton.useStyles';
import { useRouter } from 'next/navigation';

const ContinueButton = () => {
  const router = useRouter();
  const styles = useStyles();
  const setSelectedTab = useSetRecoilState(currentSelectEventTabState);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    router.push('/select-event/how-much');
    setSelectedTab('how-much');
  };

  return (
    <Button
      label='רוצה להמשיך'
      sx={styles.root}
      shape='pill'
      onClick={handleClick}
    />
  );
};

export default ContinueButton;
