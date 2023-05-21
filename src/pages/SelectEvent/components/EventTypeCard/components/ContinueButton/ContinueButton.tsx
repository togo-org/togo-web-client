import useStyles from '@/pages/SelectEvent/components/EventTypeCard/components/ContinueButton/ContinueButton.useStyles';
import Button from '@/shared/Button';
import { currentSelectEventTabState } from '@/store';
import { useSetRecoilState } from 'recoil';

const ContinueButton = () => {
  const setSelectedTab = useSetRecoilState(currentSelectEventTabState);
  const styles = useStyles();
  const handleClick = () => {
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
