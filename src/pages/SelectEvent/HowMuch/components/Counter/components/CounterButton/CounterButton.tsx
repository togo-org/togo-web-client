import useStyles from '@/pages/SelectEvent/HowMuch/components/Counter/components/CounterButton/CounterButton.useStyles';
import Button from '@/shared/Button';

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
