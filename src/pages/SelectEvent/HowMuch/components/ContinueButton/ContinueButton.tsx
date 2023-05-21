import useStyles from '@/pages/SelectEvent/HowMuch/components/ContinueButton/ContinueButton.useStyles';
import Button from '@/shared/Button';
import { currentSelectEventTabState } from '@/store';
import { useSetRecoilState } from 'recoil';

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
