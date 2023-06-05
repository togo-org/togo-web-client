'use client';

import Button from '@/features/shared/Button';
import { currentSelectEventTabState } from '@/store';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import useStyles from './ContinueButton.useStyles';

const ContinueButton = () => {
  const setSelectedTab = useSetRecoilState(currentSelectEventTabState);
  const styles = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setSelectedTab(1);
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
