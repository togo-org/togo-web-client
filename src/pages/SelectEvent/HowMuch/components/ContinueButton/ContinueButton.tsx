import useStyles from '@/pages/SelectEvent/HowMuch/components/ContinueButton/ContinueButton.useStyles';
import Button from '@/shared/Button';

const ContinueButton = () => {
  const styles = useStyles();
  return <Button label='המשך' shape='pill' sx={styles.root} />;
};

export default ContinueButton;
