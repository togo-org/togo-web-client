import useStyles from '@/pages/SelectEvent/components/EventTypeCard/components/ContinueButton/ContinueButton.useStyles';
import Button from '@/shared/Button';

const ContinueButton = () => {
  const styles = useStyles();
  return <Button label='רוצה להמשיך' sx={styles.root} shape='pill' />;
};

export default ContinueButton;
