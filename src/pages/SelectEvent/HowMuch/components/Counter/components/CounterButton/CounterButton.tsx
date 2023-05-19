import useStyles from '@/pages/SelectEvent/HowMuch/components/Counter/components/CounterButton/CounterButton.useStyles';
import Button from '@/shared/Button';

interface CounterButtonProps {
  label: string;
  onClick: () => void;
}

const CounterButton = ({ label, onClick }: CounterButtonProps) => {
  const styles = useStyles();
  return (
    <Button label={label} onClick={onClick} shape='circle' sx={styles.root} />
  );
};

export default CounterButton;
