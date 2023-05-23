import useStyles from '@/pages/SelectEvent/HowMuch/components/ContinueButton/ContinueButton.useStyles';
import Button from '@/shared/Button';

const FineEventButton = () => {
  const styles = useStyles();
  return <Button label='תמצא לי אירוע' shape='pill' sx={styles.root} />;
};

export default FineEventButton;
