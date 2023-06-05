'use client';

import Button from '@/features/shared/Button';
import useStyles from './CounterButton.useStyles';

interface CounterButtonProps {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
}

const CounterButton = ({ label, onClick, isDisabled }: CounterButtonProps) => {
  const styles = useStyles();

  return (
    <Button
      label={label}
      onClick={onClick}
      shape='circle'
      sx={isDisabled ? { ...styles.root, ...styles.disabled } : styles.root}
    />
  );
};

export default CounterButton;
